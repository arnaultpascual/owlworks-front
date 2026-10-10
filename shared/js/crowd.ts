/**
 * Crowd engine (Canvas 2D): a legion holding a formation around an anchor, "+N" spawns,
 * 10 → 1 merges and hordes. Decorative: the page exposes the state in the DOM via the on* callbacks.
 */
import { makeSprites, type CrowdTheme, type SpriteSet } from './crowd-sprites.ts';

export interface Unit {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rank: number;
  slot: number;
  phase: number;
  /** 0 → 1 pop-in scale */
  born: number;
  /** merging: moving to `tx,ty` then removed */
  merging?: { tx: number; ty: number; t: number };
  enemy?: boolean;
  dead?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
  size: number;
  color: string;
}

interface Ring {
  x: number;
  y: number;
  t: number;
  color: string;
  r: number;
}

export interface CrowdOptions {
  theme?: CrowdTheme;
  /** units at start */
  start?: number;
  /** hard cap for perf (rank-0 equivalents are not counted, units are) */
  maxUnits?: number;
  /** units of one rank that fuse into one of the next */
  mergeSize?: number;
  /** spacing between formation slots, in CSS px at rank 0 */
  spacing?: number;
  /** base unit size in CSS px (sprite height at rank 0) */
  unitSize?: number;
  /** stiffness of the formation spring */
  stiffness?: number;
  /** running bob (true for runner scenes) */
  running?: boolean;
  /** formation shape: disc (spiral) or a wedge pointing up (runner) */
  shape?: 'disc' | 'wedge';
  drawUnder?: (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number, t: number) => void;
  drawOver?: (ctx: CanvasRenderingContext2D, w: number, h: number, dt: number, t: number) => void;
  /** called every frame before the simulation step */
  onTick?: (dt: number, t: number) => void;
  onChange?: (state: { count: number; byRank: number[]; power: number }) => void;
  onMerge?: (rank: number, x: number, y: number) => void;
  onSpawn?: (n: number) => void;
  onKill?: (enemies: number, ours: number) => void;
}

const GOLDEN = Math.PI * (3 - Math.sqrt(5));

export function createCrowd(canvas: HTMLCanvasElement, opts: CrowdOptions = {}) {
  const o = {
    theme: 'blueprint' as CrowdTheme,
    start: 24,
    maxUnits: 520,
    mergeSize: 10,
    spacing: 9,
    unitSize: 14,
    stiffness: 34,
    running: true,
    shape: 'wedge' as const,
    ...opts,
  };
  const ctx = canvas.getContext('2d', { alpha: true })!;
  let dpr = Math.min(2, window.devicePixelRatio || 1);
  let W = 0;
  let H = 0;
  let sprites: SpriteSet = makeSprites(o.theme, o.unitSize, dpr);

  const units: Unit[] = [];
  const enemies: Unit[] = [];
  const particles: Particle[] = [];
  const rings: Ring[] = [];
  const anchor = { x: 0, y: 0, tx: 0, ty: 0 };
  let time = 0;
  let dirtySlots = true;
  let lastEmit = '';

  const rankScale = (r: number) => 1 + r * 0.32;

  function resize() {
    const r = canvas.getBoundingClientRect();
    const ndpr = Math.min(2, window.devicePixelRatio || 1);
    if (r.width === W && r.height === H && ndpr === dpr) return;
    W = r.width;
    H = r.height;
    if (ndpr !== dpr) {
      dpr = ndpr;
      sprites = makeSprites(o.theme, o.unitSize, dpr);
    }
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    if (!anchor.x && !anchor.y) {
      anchor.x = anchor.tx = W / 2;
      anchor.y = anchor.ty = H * 0.68;
    }
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  /* ------------------------------------------------------------ formation */

  function slotOffset(i: number, r: number): [number, number] {
    // Vogel spiral; wedge = squashed vertically and pushed back (front = up)
    const s = o.spacing * (1 + r * 0.12);
    const rad = s * Math.sqrt(i + 0.6);
    const a = i * GOLDEN;
    let x = Math.cos(a) * rad;
    let y = Math.sin(a) * rad;
    if (o.shape === 'wedge') {
      y = y * 0.62 + Math.abs(x) * 0.18;
    }
    return [x, y];
  }

  function assignSlots() {
    // strongest in the middle, then by distance to the anchor (keeps motion calm)
    units.sort((a, b) => b.rank - a.rank || Math.hypot(a.x - anchor.x, a.y - anchor.y) - Math.hypot(b.x - anchor.x, b.y - anchor.y));
    let i = 0;
    for (const u of units) {
      if (u.merging) continue;
      u.slot = i;
      i += u.rank > 0 ? 1 + u.rank : 1; // big units take more room
    }
    dirtySlots = false;
  }

  /* -------------------------------------------------------------- actions */

  function add(rank: number, x: number, y: number, enemy = false): Unit {
    const u: Unit = { x, y, vx: 0, vy: 0, rank, slot: 0, phase: Math.random() * Math.PI * 2, born: 0 };
    if (enemy) {
      u.enemy = true;
      enemies.push(u);
    } else {
      units.push(u);
      dirtySlots = true;
    }
    return u;
  }

  const counts = () => {
    const byRank: number[] = [];
    let power = 0;
    for (const u of units) {
      if (u.merging) continue;
      byRank[u.rank] = (byRank[u.rank] ?? 0) + 1;
      power += Math.pow(o.mergeSize, u.rank);
    }
    for (let i = 0; i < byRank.length; i++) byRank[i] ??= 0;
    return { count: units.filter((u) => !u.merging).length, byRank, power };
  };

  function emit() {
    const c = counts();
    const key = c.byRank.join(',');
    if (key !== lastEmit) {
      lastEmit = key;
      o.onChange?.(c);
    }
  }

  function burst(x: number, y: number, color: string, n = 8, speed = 120, size = 2.4) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = speed * (0.4 + Math.random() * 0.8);
      particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - speed * 0.4, life: 0, max: 0.45 + Math.random() * 0.4, size: size * (0.6 + Math.random() * 0.8), color });
    }
  }

  const api = {
    canvas,
    get width() {
      return W;
    },
    get height() {
      return H;
    },
    get anchor() {
      return anchor;
    },
    get units() {
      return units;
    },
    get enemies() {
      return enemies;
    },
    counts,
    /** move the legion (smoothly unless `snap`) */
    setAnchor(x: number, y: number, snap = false) {
      anchor.tx = x;
      anchor.ty = y;
      if (snap) {
        anchor.x = x;
        anchor.y = y;
      }
    },
    /** n new rank-0 units running in from (x, y) — the "+N" gate */
    spawn(n: number, x = anchor.x, y = anchor.y - 40) {
      const room = Math.max(0, o.maxUnits - units.length);
      const k = Math.min(n, room);
      for (let i = 0; i < k; i++) {
        const u = add(0, x + (Math.random() - 0.5) * 60, y + (Math.random() - 0.5) * 16);
        u.vy = 80 + Math.random() * 60;
      }
      if (k) o.onSpawn?.(k);
      emit();
      return k;
    },
    /** fuse `mergeSize` units of `rank` (default: the lowest rank that can) into one. Returns the new rank or -1. */
    merge(rank?: number): number {
      const c = counts();
      const r = rank ?? c.byRank.findIndex((n) => n >= o.mergeSize);
      if (r < 0 || (c.byRank[r] ?? 0) < o.mergeSize) return -1;
      // take the units of that rank closest to the anchor
      const pool = units.filter((u) => u.rank === r && !u.merging).sort((a, b) => Math.hypot(a.x - anchor.x, a.y - anchor.y) - Math.hypot(b.x - anchor.x, b.y - anchor.y));
      const group = pool.slice(0, o.mergeSize);
      const cx = group.reduce((s, u) => s + u.x, 0) / group.length;
      const cy = group.reduce((s, u) => s + u.y, 0) / group.length;
      for (const u of group) u.merging = { tx: cx, ty: cy, t: 0 };
      setTimeout(() => {
        for (const u of group) {
          const i = units.indexOf(u);
          if (i >= 0) units.splice(i, 1);
        }
        const nu = add(r + 1, cx, cy);
        nu.born = 0;
        rings.push({ x: cx, y: cy, t: 0, color: sprites.accent, r: 10 + r * 6 });
        burst(cx, cy, sprites.spark, 14, 160, 2.2);
        dirtySlots = true;
        o.onMerge?.(r + 1, cx, cy);
        emit();
      }, 360);
      return r + 1;
    },
    /** send n enemies from (x, y) towards the legion */
    horde(n: number, x = W / 2, y = -20, spread = W * 0.4) {
      for (let i = 0; i < n; i++) {
        const e = add(0, x + (Math.random() - 0.5) * spread, y - Math.random() * 120, true);
        e.vy = 40 + Math.random() * 40;
      }
    },
    /** remove n units of the lowest rank (losses) */
    lose(n: number) {
      let k = 0;
      for (let i = units.length - 1; i >= 0 && k < n; i--) {
        const u = units[i];
        if (u.rank === 0 && !u.merging) {
          burst(u.x, u.y, sprites.blood, 5, 90);
          units.splice(i, 1);
          k++;
        }
      }
      dirtySlots = true;
      emit();
      return k;
    },
    /** instantly set the composition (used by reduced-motion still frames) */
    set(byRank: number[]) {
      units.length = 0;
      byRank.forEach((n, r) => {
        for (let i = 0; i < n; i++) {
          const u = add(r, anchor.x, anchor.y);
          u.born = 1;
        }
      });
      assignSlots();
      for (const u of units) {
        const [ox, oy] = slotOffset(u.slot, u.rank);
        u.x = anchor.x + ox;
        u.y = anchor.y + oy;
      }
      emit();
    },
    burst,
    ring(x: number, y: number, color = sprites.accent, r = 14) {
      rings.push({ x, y, t: 0, color, r });
    },
    step,
    draw,
    /** one frame: simulate + draw */
    frame(dt: number, t: number) {
      step(dt, t);
      draw(dt, t);
    },
    resize,
    destroy() {
      ro.disconnect();
    },
    get theme() {
      return sprites;
    },
  };

  /* ----------------------------------------------------------- simulation */

  function step(dt: number, t: number) {
    time = t;
    o.onTick?.(dt, t);
    if (dirtySlots) assignSlots();

    const k = 1 - Math.exp(-8 * dt);
    anchor.x += (anchor.tx - anchor.x) * k;
    anchor.y += (anchor.ty - anchor.y) * k;

    const stiff = o.stiffness;
    const damping = 2 * Math.sqrt(stiff) * 0.9;
    for (const u of units) {
      u.born = Math.min(1, u.born + dt * 4);
      if (u.merging) {
        u.merging.t += dt;
        const m = 1 - Math.exp(-14 * dt);
        u.x += (u.merging.tx - u.x) * m;
        u.y += (u.merging.ty - u.y) * m;
        continue;
      }
      const [ox, oy] = slotOffset(u.slot, u.rank);
      const tx = anchor.x + ox;
      const ty = anchor.y + oy;
      u.vx += ((tx - u.x) * stiff - u.vx * damping) * dt;
      u.vy += ((ty - u.y) * stiff - u.vy * damping) * dt;
      u.x += u.vx * dt;
      u.y += u.vy * dt;
    }

    // enemies run at the legion, die on contact (and take some of ours)
    if (enemies.length) {
      let killed = 0;
      let lost = 0;
      const front = anchor.y - o.spacing * 2;
      for (let i = enemies.length - 1; i >= 0; i--) {
        const e = enemies[i];
        e.born = Math.min(1, e.born + dt * 4);
        const dx = anchor.x - e.x;
        const dy = anchor.y - e.y;
        const d = Math.hypot(dx, dy) || 1;
        const sp = 70 + Math.min(80, time % 7) * 0.2;
        e.vx += ((dx / d) * sp - e.vx) * Math.min(1, dt * 3);
        e.vy += ((dy / d) * sp - e.vy) * Math.min(1, dt * 3);
        e.x += e.vx * dt;
        e.y += e.vy * dt;
        // contact: the legion's radius grows with its size
        const radius = o.spacing * Math.sqrt(units.length + 1) * 0.9;
        if (d < radius || e.y > front + radius) {
          burst(e.x, e.y, sprites.blood, 6, 110);
          enemies.splice(i, 1);
          killed++;
          if (Math.random() < 0.18) lost++;
        } else if (e.y > H + 60) enemies.splice(i, 1);
      }
      if (lost) api.lose(lost);
      if (killed) o.onKill?.(killed, lost);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life += dt;
      if (p.life >= p.max) {
        particles.splice(i, 1);
        continue;
      }
      p.vy += 420 * dt;
      p.vx *= 1 - dt * 2;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
    for (let i = rings.length - 1; i >= 0; i--) {
      rings[i].t += dt;
      if (rings[i].t > 0.6) rings.splice(i, 1);
    }
  }

  /* ---------------------------------------------------------------- draw */

  const drawList: Unit[] = [];
  function draw(dt = 0, t = time) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    o.drawUnder?.(ctx, W, H, dt, t);

    drawList.length = 0;
    for (const u of units) drawList.push(u);
    for (const e of enemies) drawList.push(e);
    drawList.sort((a, b) => a.y - b.y);

    // soft contact shadows first (one pass, cheap)
    ctx.fillStyle = sprites.shadow;
    for (const u of drawList) {
      const s = rankScale(u.rank) * o.unitSize * 0.34 * u.born;
      ctx.beginPath();
      ctx.ellipse(u.x, u.y + 1, s, s * 0.42, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const u of drawList) {
      const sp = u.enemy ? sprites.enemy : sprites.ranks[Math.min(u.rank, sprites.ranks.length - 1)];
      const pop = u.born < 1 ? 0.4 + 0.6 * easeOutBack(u.born) : 1;
      const bob = o.running ? Math.abs(Math.sin(t * 11 + u.phase)) * 1.6 : 0;
      const w = sp.w * pop;
      const h = sp.h * pop;
      ctx.drawImage(sp.img, u.x - w / 2, u.y - h + h * 0.12 - bob, w, h);
    }
    for (const r of rings) {
      const p = r.t / 0.6;
      ctx.strokeStyle = r.color;
      ctx.globalAlpha = 1 - p;
      ctx.lineWidth = 3 * (1 - p) + 0.5;
      ctx.beginPath();
      ctx.arc(r.x, r.y - 6, r.r + p * 46, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (const p of particles) {
      ctx.globalAlpha = 1 - p.life / p.max;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    }
    ctx.globalAlpha = 1;
    o.drawOver?.(ctx, W, H, dt, t);
  }

  // initial legion
  if (o.start) {
    for (let i = 0; i < o.start; i++) add(0, anchor.x + (Math.random() - 0.5) * 40, anchor.y + (Math.random() - 0.5) * 30).born = 1;
    assignSlots();
    emit();
  }

  return api;
}

export type Crowd = ReturnType<typeof createCrowd>;

function easeOutBack(x: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}
