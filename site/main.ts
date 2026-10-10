/** Client: header and tools, the hero plate, the trace, then the components (lazy modules). */
import { gsap } from 'gsap';
import { prefersReducedMotion, hasFinePointer, onReducedMotionChange, startAtTop } from '../shared/js/env.ts';
import { consoleHello } from '../shared/js/egg.ts';
import { createTrace, type Trace } from './trace.ts';

const root = document.documentElement;
root.classList.replace('no-js', 'js');
startAtTop();

const reduce = prefersReducedMotion();
const DATA = JSON.parse(document.getElementById('ow-data')?.textContent || '{}') as {
  console: string;
  hoot: string;
  counter: string[];
  sealed: string;
  frozen: string;
  tokenRefreshed: string;
  lang: 'fr' | 'en';
  cyanKey: string;
  probe: { x: string; y: string };
  legionLive: { one: string; other: string };
  tl: { frameTitle: string; powerOn: string; evolved: string };
  tw: { valid: string; expired: string };
};
export type ClientData = typeof DATA;

const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s)!;
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => [...el.querySelectorAll<T>(s)];
const mqMobile = matchMedia('(max-width: 1023px)');

const sheet = $('.sheet');

/* ------------------------------------------------------------- header */
function initHeader() {
  const hdr = $('.hdr');
  const btn = $<HTMLButtonElement>('.hdr-menu');
  const label = $('.hdr-menu-l');
  const set = (open: boolean) => {
    hdr.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    label.textContent = open ? label.dataset.close! : label.dataset.open!;
  };
  btn.addEventListener('click', () => set(!hdr.classList.contains('is-open')));
  $$('.hdr-nav a').forEach((a) => a.addEventListener('click', () => set(false)));
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hdr.classList.contains('is-open')) {
      set(false);
      btn.focus();
    }
  });

  // current section in the nav
  const links = new Map($$<HTMLAnchorElement>('.hdr-nav a').map((a) => [a.getAttribute('href')!.slice(1), a]));
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const a = links.get(e.target.id);
        if (!a) continue;
        if (e.isIntersecting) {
          links.forEach((l) => l.removeAttribute('aria-current'));
          a.setAttribute('aria-current', 'true');
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  links.forEach((_, id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
  // back on the hero: no section is current
  new IntersectionObserver(([e]) => e.isIntersecting && links.forEach((l) => l.removeAttribute('aria-current')), { rootMargin: '-45% 0px -50% 0px' }).observe(
    document.getElementById('top')!,
  );
}

/* -------------------------------------------------------------- tools */
function initTools() {
  const cyan = $<HTMLButtonElement>('.tool--cyan');
  const toggleCyan = () => {
    const on = !root.classList.contains('cyan');
    root.classList.add('cyan-anim');
    root.classList.toggle('cyan', on);
    cyan.setAttribute('aria-pressed', String(on));
    cyan.setAttribute('aria-label', on ? cyan.dataset.on! : cyan.dataset.off!);
    setTimeout(() => root.classList.remove('cyan-anim'), 800);
  };
  cyan.addEventListener('click', toggleCyan);
  addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement;
    if (e.metaKey || e.ctrlKey || e.altKey || t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
    if (e.key.toLowerCase() === DATA.cyanKey.toLowerCase()) toggleCyan();
  });
}

/* -------------------------------------------------------------- probe */
function initProbe() {
  if (!hasFinePointer()) return;
  const probe = $('.probe');
  const h = $('.probe-h', probe), v = $('.probe-v', probe), t = $('.probe-t', probe);
  const tx = $('.probe-x', probe), ty = $('.probe-y', probe), tr = $('.probe-r', probe);
  let over: Element | null = null;
  const tw = document.getElementById('thirdwatch')!;
  const tl = document.getElementById('tiny-legion')!;
  let x = 0, y = 0, raf = 0;
  const g = 12;
  const draw = () => {
    raf = 0;
    h.style.transform = `translate3d(0, ${y}px, 0)`;
    v.style.transform = `translate3d(${x}px, 0, 0)`;
    const right = x > innerWidth - 150;
    t.style.transform = `translate3d(${right ? x - 12 - t.offsetWidth : x + 12}px, ${y + 12}px, 0)`;
    const s = sheet.getBoundingClientRect();
    tx.textContent = `${DATA.probe.x} ${((x - s.left) / g).toFixed(1).padStart(6, '0')}`;
    ty.textContent = `${DATA.probe.y} ${((y - s.top) / g).toFixed(1).padStart(6, '0')}`;
    const inRect = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return y >= r.top && y <= r.bottom;
    };
    probe.classList.toggle('is-dark', (tw.classList.contains('is-flooded') && inRect(tw)) || (tl.dataset.state === 'game' && inRect(tl)) || root.classList.contains('cyan'));
    // the reference designator under the probe, like a CAD readout
    const comp = over?.closest<HTMLElement>('[data-comp]');
    const ref = comp?.dataset.ref ?? comp?.dataset.comp?.toUpperCase() ?? '';
    tr.textContent = ref ? `· ${ref}` : '';
  };
  addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      x = e.clientX;
      y = e.clientY;
      over = e.target as Element;
      probe.classList.add('is-on');
      if (!raf) raf = requestAnimationFrame(draw);
    },
    { passive: true },
  );
  document.addEventListener('pointerleave', () => probe.classList.remove('is-on'));
  addEventListener('blur', () => probe.classList.remove('is-on'));
}

/* -------------------------------------------------------------- plate */
function sizePlan() {
  const plan = $<SVGSVGElement>('.plan');
  const vb = plan.viewBox.baseVal;
  const set = () => {
    const w = plan.getBoundingClientRect().width || 1;
    plan.style.setProperty('--px', (vb.width / w).toFixed(3));
  };
  new ResizeObserver(set).observe(plan);
  set();
}

function heroIntro(trace: Trace): Promise<void> {
  const plan = $<SVGSVGElement>('.plan');
  const lines = $$('.hero-title .ln');
  const done = () => {
    root.classList.add('ready', 'live');
    gsap.set([...$$('.plan *', document), ...lines, $('.hero-lede'), $('.hero-skills'), $('.hero-tb'), $('.hero-hint')], { clearProps: 'all' });
  };
  if (reduce) {
    done();
    return Promise.resolve();
  }
  const q = (s: string) => $$<SVGElement>(s, plan);
  const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

  // what CSS hides before JS: take over with inline states
  gsap.set(q('.pl-cons .dr, .pl-dim .dr'), { strokeDashoffset: 1 });
  gsap.set(q('.pl-owl .dr'), { strokeDashoffset: 1, fillOpacity: 0, strokeOpacity: 1 });
  gsap.set(q('.pl-arrow, .pl-txt, .pl-ctr, .pl-axis'), { opacity: 0 });
  root.classList.add('ready');

  // lettering: each line is plotted left → right with its guides
  const clipFrom = 'inset(-0.25em 102% -0.25em -0.3em)';
  const clipTo = 'inset(-0.25em -0.4em -0.25em -0.3em)';
  tl.fromTo(lines, { clipPath: clipFrom }, { clipPath: clipTo, duration: 0.7, stagger: 0.28, ease: 'power3.inOut' }, 0.15);
  tl.from([$('.hero-eyebrow')], { opacity: 0, duration: 0.4 }, 0);

  // construction
  tl.fromTo(q('.pl-axis-v'), { opacity: 1, scaleY: 0, transformOrigin: '50% 50%' }, { scaleY: 1, duration: 0.8 }, 0.1);
  tl.fromTo(q('.pl-axis-h, .pl-axis-p'), { opacity: 1, scaleX: 0, transformOrigin: '50% 50%' }, { scaleX: 1, duration: 0.8, stagger: 0.1 }, 0.2);
  tl.fromTo(q('.pl-ctr'), { opacity: 1, scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.35, stagger: 0.06, ease: 'back.out(3)' }, 0.35);
  tl.to(q('.pl-cons .dr'), { strokeDashoffset: 0, duration: 0.9, stagger: 0.07, ease: 'power1.inOut' }, 0.45);

  // dimensions, note by note
  q('.pl-note').forEach((n, i) => {
    const at = 1.0 + i * 0.13;
    const lines = $$('.dr', n), arrows = $$('.pl-arrow', n), txt = $$('.pl-txt', n);
    if (lines.length) tl.to(lines, { strokeDashoffset: 0, duration: 0.45, stagger: 0.05 }, at);
    if (arrows.length) tl.to(arrows, { opacity: 1, duration: 0.15 }, at + 0.35);
    if (txt.length) tl.to(txt, { opacity: 1, duration: 0.2, ease: 'steps(3)' }, at + 0.4);
  });

  // the mark: outlines, then ink
  const owl = q('.pl-owl .dr');
  tl.to(owl, { strokeDashoffset: 0, duration: 1.0, stagger: 0.03, ease: 'power1.inOut' }, 1.0);
  tl.to(owl, { fillOpacity: 1, strokeOpacity: 0, duration: 0.5, stagger: 0.025 }, 1.75);
  tl.fromTo(q('.pl-owl .pupil'), { scale: 0 }, { scale: 1, duration: 0.5, ease: 'back.out(3)' }, 2.55);
  tl.to(q('.pl-cons circle'), { strokeOpacity: 0.22, duration: 0.6 }, 2.6);

  // the rest of the sheet
  tl.from($('.hero-lede'), { opacity: 0, duration: 0.6, ease: 'none' }, 1.0);
  tl.from($$('.skills li'), { opacity: 0, x: -8, duration: 0.3, stagger: 0.07, ease: 'power2.out' }, 1.3);
  tl.from($('.hero-tb'), { opacity: 0, duration: 0.5, ease: 'steps(4)' }, 2.2);
  tl.from($('.hero-hint'), { opacity: 0, duration: 0.5 }, 3.0);

  return new Promise((resolve) => {
    let handed = false;
    const handOver = () => {
      if (handed) return;
      handed = true;
      const s = sheet.getBoundingClientRect();
      trace.intro(-s.top + innerHeight * 0.96, 1.5).then(() => trace.enable());
    };
    tl.call(handOver, [], 2.7);
    tl.eventCallback('onComplete', () => {
      done();
      resolve();
    });
    // a visitor who scrolls right away should not wait for the drawing
    const skip = () => {
      if (scrollY > innerHeight * 0.35 && tl.isActive()) {
        tl.timeScale(4);
        handOver();
        trace.enable();
      }
    };
    addEventListener('scroll', skip, { passive: true });
  });
}

/** after the intro: the gear turns on its own (CSS), the target eye follows the cursor */
function owlAlive() {
  if (reduce) return;
  const plan = $<SVGSVGElement>('.plan');
  const pupil = $<SVGCircleElement>('.pl-owl .pupil', plan);
  let visible = true;
  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    plan.classList.toggle('is-off', !visible);
  }).observe(plan);
  if (hasFinePointer()) {
    let praf = 0, px = 0, py = 0;
    addEventListener(
      'pointermove',
      (e) => {
        if (!visible) return;
        px = e.clientX;
        py = e.clientY;
        if (praf) return;
        praf = requestAnimationFrame(() => {
          praf = 0;
          const r = pupil.getBoundingClientRect();
          const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
          const a = Math.atan2(py - cy, px - cx);
          const d = Math.min(1, Math.hypot(px - cx, py - cy) / 400);
          const k = r.width * 0.45 * d;
          pupil.style.transform = `translate(${(Math.cos(a) * k).toFixed(1)}px, ${(Math.sin(a) * k).toFixed(1)}px)`;
        });
      },
      { passive: true },
    );
  }

  // easter egg: short-circuit the two vias → the owl blinks
  let armed = 0;
  const hoot = document.createElement('p');
  hoot.className = 'hoot';
  hoot.setAttribute('aria-live', 'polite');
  $('.hero-plan').appendChild(hoot);
  plan.addEventListener('pointerdown', (e) => {
    const t = e.target as Element;
    if (t.closest('.via-l')) armed = performance.now();
    else if (t.closest('.via-r') && performance.now() - armed < 2500) {
      armed = 0;
      const eyes = $$('#pl-eye-gear, #pl-eye-target', plan);
      gsap.fromTo(eyes, { scaleY: 1, transformOrigin: '50% 50%' }, { scaleY: 0.08, duration: 0.09, yoyo: true, repeat: 3, ease: 'power1.in', clearProps: 'transform' });
      hoot.textContent = DATA.hoot;
      setTimeout(() => (hoot.textContent = ''), 2600);
    }
  });
}

/* --------------------------------------------------------- components */
type Hooks = { power?: () => void; pulse?: () => void };
const hooks = new Map<string, Hooks>();
const pending = new Set<string>();
/** a lazy module registers its hooks; a power-up that came earlier is replayed */
export function onComponent(id: string, h: Hooks) {
  hooks.set(id, h);
  if (pending.has(id)) h.power?.();
}

function initComponents(trace: Trace) {
  $$('[data-comp]').forEach((el) => {
    const id = el.dataset.comp!;
    trace.register({
      id,
      el,
      power: () => {
        el.closest('section')?.classList.add('is-powered');
        const h = hooks.get(id);
        if (h?.power) h.power();
        else pending.add(id);
      },
      onPulse: () => {
        el.classList.remove('is-flash');
        void el.offsetWidth;
        el.classList.add('is-flash');
        hooks.get(id)?.pulse?.();
      },
    });
    // hover (mouse) or tap (touch) sends current to the component
    el.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse') trace.pulse(id);
    });
    el.addEventListener('click', (e) => {
      if ((e.target as Element).closest('a, button, input, label, [tabindex]')) return;
      trace.pulse(id);
    });
  });

  // J1 Verrou: assembles and locks once powered; hover jiggles the shackle
  const j1 = document.querySelector<HTMLElement>('.conn--verrou');
  if (j1)
    onComponent('j1', {
      power: () => setTimeout(() => j1.classList.add('is-locked'), reduce ? 0 : 450),
      pulse: () => {
        if (!j1.classList.contains('is-locked')) return;
        j1.classList.add('is-jiggle');
        setTimeout(() => j1.classList.remove('is-jiggle'), 260);
      },
    });
  const vis = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('is-vis', e.isIntersecting)));
  $$('.conn').forEach((el) => vis.observe(el));
  const j3 = document.querySelector<HTMLElement>('.conn--octopusftp');
  if (j3)
    onComponent('j3', {
      pulse: () => {
        j3.classList.add('is-fast');
        setTimeout(() => j3.classList.remove('is-fast'), 2400);
      },
    });

  // lazy modules, loaded when their section comes near
  const lazy: [string, () => Promise<{ init: (ctx: Ctx) => void }>][] = [
    ['tiny-legion', () => import('./u1.ts')],
    ['readseal', () => import('./u2.ts')],
    ['thirdwatch', () => import('./u3.ts')],
  ];
  const ctx: Ctx = { reduce, data: DATA, onComponent, trace };
  // The HTML ships every component in its final state (no JS / reduced motion); each module
  // rewinds its scene when it starts. Start them all soon after the hero, well before the
  // visitor gets there, so no section is ever seen already "powered" (an approaching section
  // still starts its own module right away).
  const started = new Set<string>();
  const start = (id: string, load: () => Promise<{ init(c: Ctx): void }>) => {
    if (started.has(id)) return;
    started.add(id);
    load().then((m) => m.init(ctx));
  };
  for (const [id, load] of lazy) {
    const el = document.getElementById(id)!;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        start(id, load);
      },
      { rootMargin: '1200px 0px' },
    );
    io.observe(el);
  }
  const all = () => lazy.forEach(([id, load]) => start(id, load));
  if ('requestIdleCallback' in window) requestIdleCallback(all, { timeout: 2500 });
  else setTimeout(all, 1200);
}

export interface Ctx {
  reduce: boolean;
  data: typeof DATA;
  onComponent: typeof onComponent;
  trace: Trace;
}

/* --------------------------------------------------------------- boot */
function boot() {
  initHeader();
  initTools();
  initProbe();
  sizePlan();

  const trace = createTrace(sheet, $<SVGSVGElement>('.board'), $('.electron'), { reduce, mobile: () => mqMobile.matches });
  initComponents(trace);
  const start = () => {
    trace.init();
    heroIntro(trace).then(owlAlive);
  };
  // geometry depends on fonts (line breaks): wait for them, but not forever
  Promise.race([document.fonts?.ready ?? Promise.resolve(), new Promise((r) => setTimeout(r, 900))]).then(() => requestAnimationFrame(start));

  onReducedMotionChange(() => location.reload());
  consoleHello(DATA.console);
}

boot();
