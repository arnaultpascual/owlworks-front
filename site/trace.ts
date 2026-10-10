/**
 * The trace: one PCB track from the owl's perch down the whole page, drawn with the scroll.
 * When its head reaches a component, the branch draws and the component powers up.
 * Geometry comes from the layout (recomputed on resize), 1 SVG unit = 1 CSS px.
 */
import { clamp, damp, rafLoop } from '../shared/js/env.ts';

type P = { x: number; y: number };
const NS = 'http://www.w3.org/2000/svg';

export interface TraceComp {
  id: string;
  el: HTMLElement;
  power: () => void;
  /** pulse arrived at the component */
  onPulse?: () => void;
}

interface CompGeom {
  id: string;
  junction: number; // length along the trunk
  branch: P[]; // from the junction to the pin (may be empty for "through" components)
  branchLen: number;
  via: boolean;
}

interface Seg {
  a: P;
  b: P;
  len: number;
  l0: number; // cumulative length at a
  el: SVGPathElement;
  drawn: number; // last drawn amount, to avoid useless style writes
}

const dist = (a: P, b: P) => Math.hypot(b.x - a.x, b.y - a.y);
const lenOf = (pts: P[]) => pts.reduce((s, p, i) => (i ? s + dist(pts[i - 1], p) : 0), 0);
const dOf = (pts: P[]) => pts.map((p, i) => `${i ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join('');

/** cut every right-angle (or sharper) corner with a 45° chamfer of size c */
function chamfer(pts: P[], c: number): P[] {
  if (pts.length < 3) return pts;
  const out: P[] = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const a = pts[i - 1], b = pts[i], n = pts[i + 1];
    const v1 = { x: b.x - a.x, y: b.y - a.y }, v2 = { x: n.x - b.x, y: n.y - b.y };
    const l1 = Math.hypot(v1.x, v1.y), l2 = Math.hypot(v2.x, v2.y);
    if (l1 < 1 || l2 < 1) continue;
    const cos = (v1.x * v2.x + v1.y * v2.y) / (l1 * l2);
    if (cos > 0.5) {
      out.push(b); // 45° bends stay as they are
      continue;
    }
    const k = Math.min(c, l1 / 2, l2 / 2);
    out.push({ x: b.x - (v1.x / l1) * k, y: b.y - (v1.y / l1) * k }, { x: b.x + (v2.x / l2) * k, y: b.y + (v2.y / l2) * k });
  }
  out.push(pts[pts.length - 1]);
  return out;
}

/** vertical run, then a 45° jog that lands `pad` px above `to`, then vertical */
export function jog(from: P, to: P, pad = 24): P[] {
  const dx = Math.abs(to.x - from.x);
  if (dx < 0.5) return [to];
  const yJog = to.y - pad - dx;
  if (yJog >= from.y) return [{ x: from.x, y: yJog }, { x: to.x, y: to.y - pad }, to];
  // not enough height: horizontal then vertical
  return [{ x: from.x, y: from.y }, { x: to.x, y: from.y }, to];
}

export function createTrace(sheet: HTMLElement, svg: SVGSVGElement, electron: HTMLElement, opts: { reduce: boolean; mobile: () => boolean }) {
  const gTrunk = svg.querySelector('.board-trunk') as SVGGElement;
  const gBranch = svg.querySelector('.board-branches') as SVGGElement;
  const gPulse = svg.querySelector('.board-pulses') as SVGGElement;
  const tail = svg.querySelector('.board-tail') as SVGPathElement;

  const comps = new Map<string, TraceComp>();
  let geoms: CompGeom[] = [];
  const poweredIds = new Set<string>();
  const branchEls = new Map<string, SVGPathElement>();
  let segs: Seg[] = [];
  let pts: P[] = [];
  let cum: number[] = [];
  let total = 0;

  let hide: { l: number; r: number; t: number; b: number; always: boolean }[] = []; // where the electron runs inside a component
  let target = 0; // length we must reach (latched)
  let shown = 0; // length drawn on screen
  let floor = 0; // drawn by the intro, independent of scroll
  let enabled = false; // scroll drawing starts after the hero intro
  let headLine = 0.62;

  /* --------------------------------------------------------- geometry */
  const sheetBox = () => sheet.getBoundingClientRect();
  function rel(r: DOMRect, s: DOMRect) {
    return { left: r.left - s.left, right: r.right - s.left, top: r.top - s.top, bottom: r.bottom - s.top, cx: (r.left + r.right) / 2 - s.left, cy: (r.top + r.bottom) / 2 - s.top, w: r.width, h: r.height };
  }

  function pointAt(L: number): P {
    L = clamp(L, 0, total);
    let lo = 0, hi = cum.length - 1;
    while (lo < hi - 1) {
      const m = (lo + hi) >> 1;
      if (cum[m] <= L) lo = m;
      else hi = m;
    }
    const a = pts[lo], b = pts[Math.min(lo + 1, pts.length - 1)];
    const l = cum[lo + 1] - cum[lo] || 1;
    const t = (L - cum[lo]) / l;
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
  }

  /** the trunk is y-monotonic: length at which it reaches `y` */
  function lengthAtY(y: number): number {
    if (!pts.length || y < pts[0].y) return 0;
    let i = 0;
    for (let k = 0; k < pts.length; k++) if (pts[k].y <= y) i = k;
    if (i >= pts.length - 1) return total;
    const a = pts[i], b = pts[i + 1];
    const t = b.y > a.y ? (y - a.y) / (b.y - a.y) : 1;
    return cum[i] + t * (cum[i + 1] - cum[i]);
  }

  function slice(L0: number, L1: number): P[] {
    L0 = clamp(L0, 0, total);
    L1 = clamp(L1, 0, total);
    const out: P[] = [pointAt(L0)];
    for (let i = 0; i < pts.length; i++) if (cum[i] > L0 && cum[i] < L1) out.push(pts[i]);
    out.push(pointAt(L1));
    return out;
  }

  function layout() {
    const s = sheetBox();
    const mob = opts.mobile();
    const main = sheet.querySelector('main') as HTMLElement;
    const sec = sheet.querySelector('#studio') as HTMLElement;
    const cs = getComputedStyle(sec);
    const secR = rel(sec.getBoundingClientRect(), s);
    const contentL = secR.left + parseFloat(cs.paddingLeft);
    const contentR = secR.right - parseFloat(cs.paddingRight);
    const zone = parseFloat(getComputedStyle(sheet).getPropertyValue('--zone')) || 0;
    const rail = mob ? Math.round((zone + contentL) / 2) : Math.round((contentR + (s.width - zone)) / 2);
    void main;

    const plan = sheet.querySelector('.plan') as SVGSVGElement;
    const exitAttr = (mob ? plan.dataset.exitLeft : plan.dataset.exit)!.split(',').map(Number);
    const m = plan.getScreenCTM();
    let via: P = { x: rail, y: 400 };
    if (m) {
      const p = new DOMPoint(exitAttr[0], exitAttr[1]).matrixTransform(m);
      via = { x: p.x - s.left, y: p.y - s.top };
    }

    const pinOf = (el: Element | null): P | null => {
      if (!el) return null;
      const r = rel(el.getBoundingClientRect(), s);
      return { x: r.cx, y: r.cy };
    };

    const raw: P[] = [via, { x: rail, y: via.y }];
    geoms = [];

    const j0 = pinOf(sheet.querySelector('[data-comp="j0"] [data-pin]'));
    const stage = sheet.querySelector('[data-through]') as HTMLElement | null;
    const chip = sheet.querySelector('[data-comp="u1"]') as HTMLElement | null;

    // U1 on desktop: the trunk leaves the rail, enters the chip and IS the road
    hide = [];
    if (!mob && stage && chip) {
      const st = rel(stage.getBoundingClientRect(), s);
      const ch = rel(chip.getBoundingClientRect(), s);
      // the electron rides the road in the schematic, but never over the live game or the controls
      const ctl = chip.querySelector('.tl-controls');
      if (ctl) {
        const c = rel(ctl.getBoundingClientRect(), s);
        hide.push({ l: c.left, r: c.right, t: c.top - 30, b: c.bottom, always: true });
      }
      hide.push({ l: st.left, r: st.right, t: st.top - 30, b: st.bottom, always: false });
      const cx = Math.round(st.cx);
      const yIn = ch.top - 34;
      const yOut = ch.bottom + 30;
      raw.push({ x: rail, y: yIn }, { x: cx, y: yIn }, { x: cx, y: yOut }, { x: rail, y: yOut });
    }
    if (j0) raw.push({ x: rail, y: j0.y }, j0);
    else raw.push({ x: rail, y: s.height - 40 });

    pts = chamfer(raw, 18);
    cum = [0];
    for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + dist(pts[i - 1], pts[i]));
    total = cum[cum.length - 1];

    // components: junctions and branches
    const busPins: { id: string; p: P }[] = [];
    for (const [id, comp] of comps) {
      if (id === 'j0') {
        geoms.push({ id, junction: total - 1, branch: [], branchLen: 0, via: false });
        continue;
      }
      if (id === 'u1' && !mob && stage) {
        const st = rel(stage.getBoundingClientRect(), s);
        geoms.push({ id, junction: lengthAtY(st.top + st.h * 0.42), branch: [], branchLen: 0, via: false });
        continue;
      }
      const pin = pinOf(comp.el.querySelector('[data-pin]'));
      if (!pin) continue;
      if (!mob && id.startsWith('j')) {
        busPins.push({ id, p: pin });
        continue;
      }
      const j = { x: rail, y: pin.y };
      const br = [j, pin];
      geoms.push({ id, junction: lengthAtY(j.y), branch: br, branchLen: lenOf(br), via: true });
    }
    if (busPins.length) {
      const busY = Math.min(...busPins.map((b) => b.p.y)) - 46;
      const j = { x: rail, y: busY };
      for (const b of busPins) {
        const br = chamfer([j, { x: b.p.x, y: busY }, b.p], 14);
        geoms.push({ id: b.id, junction: lengthAtY(busY), branch: br, branchLen: lenOf(br), via: true });
      }
    }
    geoms.sort((a, b) => a.junction - b.junction);

    build(s);
  }

  /* ------------------------------------------------------------ DOM */
  function sectionOf(y: number): string {
    for (const id of ['tiny-legion', 'thirdwatch']) {
      const el = document.getElementById(id);
      if (!el) continue;
      const s = sheetBox();
      const r = el.getBoundingClientRect();
      if (y >= r.top - s.top && y <= r.bottom - s.top) return id;
    }
    return '';
  }

  function build(s: DOMRect) {
    // no viewBox: 1 unit = 1 CSS px, whatever the sheet does next
    svg.removeAttribute('viewBox');
    svg.style.width = `${Math.ceil(s.width)}px`;
    svg.style.height = `${Math.ceil(s.height)}px`;
    gTrunk.replaceChildren();
    gBranch.replaceChildren();
    branchEls.clear();
    segs = [];
    // split the trunk where it enters/leaves a recoloured section, and into
    // short pieces so a frame only repaints a small area
    const bounds: number[] = [];
    for (const id of ['tiny-legion', 'thirdwatch']) {
      const el = document.getElementById(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      bounds.push(r.top - s.top, r.bottom - s.top);
    }
    const MAX = 640;
    for (let i = 1; i < pts.length; i++) {
      const A = pts[i - 1], B = pts[i];
      const L = dist(A, B);
      if (L < 0.5) continue;
      const ts = new Set<number>([0, 1]);
      if (B.y !== A.y) for (const y of bounds) if (y > Math.min(A.y, B.y) && y < Math.max(A.y, B.y)) ts.add((y - A.y) / (B.y - A.y));
      for (let k = 1; k < Math.ceil(L / MAX); k++) ts.add(k / Math.ceil(L / MAX));
      const cuts = [...ts].sort((x, y) => x - y);
      for (let k = 1; k < cuts.length; k++) {
        const a = { x: A.x + (B.x - A.x) * cuts[k - 1], y: A.y + (B.y - A.y) * cuts[k - 1] };
        const b = { x: A.x + (B.x - A.x) * cuts[k], y: A.y + (B.y - A.y) * cuts[k] };
        const len = dist(a, b);
        if (len < 0.5) continue;
        const el = document.createElementNS(NS, 'path');
        el.setAttribute('d', dOf([a, b]));
        const sec = sectionOf((a.y + b.y) / 2);
        el.setAttribute('class', `seg${sec ? ` seg--${sec}` : ''}`);
        el.style.strokeDasharray = `${len} ${len + 8}`;
        el.style.strokeDashoffset = `${len}`;
        el.style.visibility = 'hidden';
        gTrunk.appendChild(el);
        segs.push({ a, b, len, l0: cum[i - 1] + L * cuts[k - 1], el, drawn: -1 });
      }
    }
    for (const g of geoms) {
      if (!g.branch.length) continue;
      const el = document.createElementNS(NS, 'path');
      el.setAttribute('d', dOf(g.branch));
      const sec = sectionOf(g.branch[0].y);
      el.setAttribute('class', `br${sec ? ` seg--${sec}` : ''}`);
      const on = poweredIds.has(g.id);
      el.style.strokeDasharray = `${g.branchLen} ${g.branchLen + 8}`;
      el.style.strokeDashoffset = on ? '0' : `${g.branchLen}`;
      el.style.visibility = on ? 'visible' : 'hidden';
      gBranch.appendChild(el);
      branchEls.set(g.id, el);
      if (g.via) {
        const v = document.createElementNS(NS, 'circle');
        v.setAttribute('cx', g.branch[0].x.toFixed(1));
        v.setAttribute('cy', g.branch[0].y.toFixed(1));
        v.setAttribute('r', '5.5');
        v.setAttribute('class', `via${sec ? ` seg--${sec}` : ''}`);
        v.dataset.comp = g.id;
        if (!on) v.style.visibility = 'hidden';
        gBranch.appendChild(v);
      }
    }
    render(true);
  }

  /* ------------------------------------------------------------ draw */
  function render(force = false) {
    for (const sg of segs) {
      const d = clamp(shown - sg.l0, 0, sg.len);
      if (!force && Math.abs(d - sg.drawn) < 0.25) continue;
      sg.drawn = d;
      sg.el.style.visibility = d > 0.5 ? 'visible' : 'hidden';
      sg.el.style.strokeDashoffset = `${(sg.len - d).toFixed(1)}`;
    }
    // electron + current tail
    const p = pointAt(shown);
    const gameOn = document.documentElement.classList.contains('tl-game-on');
    const inside = hide.some((h) => (h.always || gameOn) && p.x > h.l && p.x < h.r && p.y > h.t + 30 && p.y < h.b);
    const show = !opts.reduce && shown > 1 && shown < total - 1;
    electron.style.opacity = show && !inside ? '1' : '0';
    if (show) {
      electron.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`;
      tail.setAttribute('d', dOf(slice(shown - 90, shown)));
      tail.style.visibility = 'visible';
    } else tail.style.visibility = 'hidden';
    // power-ups
    for (const g of geoms) if (!poweredIds.has(g.id) && shown >= g.junction) powerUp(g);
  }

  function powerUp(g: CompGeom, instant = false) {
    poweredIds.add(g.id);
    const comp = comps.get(g.id);
    const el = branchEls.get(g.id);
    const via = gBranch.querySelector<SVGCircleElement>(`circle[data-comp="${g.id}"]`);
    if (via) via.style.visibility = 'visible';
    const done = () => {
      comp?.el.classList.add('is-on');
      comp?.power();
    };
    if (el) {
      el.style.visibility = 'visible';
      if (instant || opts.reduce) {
        el.style.strokeDashoffset = '0';
        done();
      } else {
        const a = el.animate([{ strokeDashoffset: g.branchLen }, { strokeDashoffset: 0 }], { duration: 260 + g.branchLen * 0.9, easing: 'cubic-bezier(.5,0,.2,1)', fill: 'forwards' });
        a.onfinish = () => {
          el.style.strokeDashoffset = '0';
          a.cancel();
          done();
        };
      }
    } else done();
  }

  /* ------------------------------------------------------------ loop */
  const loop = rafLoop((dt) => {
    const goal = Math.max(target, floor);
    const k = damp(5.5, dt);
    const step = Math.max((goal - shown) * k, Math.min(goal - shown, 420 * dt));
    shown = Math.min(goal, shown + step);
    render();
    if (goal - shown < 0.4) {
      shown = goal;
      render();
      loop.stop();
    }
  });

  function onScroll() {
    if (!enabled || !total) return;
    const s = sheetBox();
    const y = -s.top + innerHeight * headLine;
    // at the very bottom of the page the current reaches the end connector
    const atEnd = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
    const L = atEnd ? total : lengthAtY(y);
    if (L > target) {
      target = L;
      loop.start();
    }
  }

  /* --------------------------------------------------------- pulses */
  const pulsing = new Set<string>();
  function pulse(id: string) {
    if (opts.reduce || !poweredIds.has(id) || pulsing.has(id)) return false;
    const g = geoms.find((x) => x.id === id);
    if (!g) return false;
    const path = [...slice(g.junction - 760, g.junction), ...g.branch.slice(1)];
    const L = lenOf(path);
    const el = document.createElementNS(NS, 'path');
    el.setAttribute('d', dOf(path));
    el.setAttribute('class', 'pulse');
    const pattern = [16, 26, 16, 26, 16];
    const D = pattern.reduce((a, b) => a + b, 0);
    el.style.strokeDasharray = `${pattern.join(' ')} ${L + D + 40}`;
    gPulse.appendChild(el);
    pulsing.add(id);
    const a = el.animate([{ strokeDashoffset: D }, { strokeDashoffset: -L }], { duration: Math.max(500, (L + D) / 1.7), easing: 'cubic-bezier(.35,0,.25,1)' });
    a.onfinish = () => {
      el.remove();
      pulsing.delete(id);
      comps.get(id)?.onPulse?.();
    };
    return true;
  }

  /* ------------------------------------------------------- lifecycle */
  let resizeT = 0;
  const ro = new ResizeObserver(() => {
    clearTimeout(resizeT);
    resizeT = window.setTimeout(() => {
      const before = total ? shown / total : 0;
      layout();
      // keep what was drawn: at least every powered junction, and the reading line
      const s = sheetBox();
      const fromScroll = enabled ? lengthAtY(-s.top + innerHeight * headLine) : 0;
      const fromPower = Math.max(0, ...geoms.filter((g) => poweredIds.has(g.id)).map((g) => g.junction));
      const keep = opts.reduce ? total : Math.max(fromScroll, fromPower, floor ? lengthAtY(floorY) : 0, before > 0.999 ? total : 0);
      target = shown = keep;
      render(true);
    }, 140);
  });

  let floorY = 0;

  return {
    register(comp: TraceComp) {
      comps.set(comp.id, comp);
    },
    init() {
      layout();
      ro.observe(sheet);
      addEventListener('scroll', onScroll, { passive: true });
      if (opts.reduce) {
        enabled = true;
        target = shown = total;
        render(true);
        for (const g of geoms) if (!poweredIds.has(g.id)) powerUp(g, true);
      }
    },
    /** the hero intro hands over: draw out of the perch, down to y (sheet px) */
    intro(toY: number, duration = 1.4) {
      floorY = toY;
      const goal = lengthAtY(toY);
      return new Promise<void>((resolve) => {
        const t0 = performance.now();
        const from = floor;
        const tick = () => {
          const t = Math.min(1, (performance.now() - t0) / (duration * 1000));
          const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          floor = from + (goal - from) * e;
          shown = Math.max(shown, floor);
          render();
          if (t < 1) requestAnimationFrame(tick);
          else resolve();
        };
        requestAnimationFrame(tick);
      });
    },
    enable() {
      enabled = true;
      onScroll();
    },
    get enabled() {
      return enabled;
    },
    pulse,
    isPowered: (id: string) => poweredIds.has(id),
    /** power everything now (used when jumping far, or reduced motion) */
    completeAll() {
      target = shown = total;
      render(true);
    },
    relayout: () => layout(),
    lengthAtY,
    get total() {
      return total;
    },
  };
}

export type Trace = ReturnType<typeof createTrace>;
