/**
 * The runner scene of the Tiny Legion schematic: a road, "+N" gates, hordes and 10 → 1 fusions.
 * Steered by the pointer X over `steerEl`, a horizontal drag or ← →; autopilot after 3 s idle.
 */
import { createCrowd, type Crowd } from './crowd.ts';
import type { CrowdTheme } from './crowd-sprites.ts';
import { prefersReducedMotion, rafLoop, whenVisible, deviceTier } from './env.ts';

interface Gate {
  y: number;
  left: number;
  right: number;
  taken: '' | 'left' | 'right';
  flash: number;
}

export interface RunnerOptions {
  theme?: CrowdTheme;
  /** element that listens to the pointer (defaults to the canvas) */
  steerEl?: HTMLElement;
  /** road width as a share of the canvas width (clamped to px limits) */
  road?: number;
  /** px/s */
  speed?: number;
  /** seconds between gate pairs */
  gateEvery?: number;
  /** seconds between hordes (0 = none) */
  hordeEvery?: number;
  /** rank-0 units above which 10 of them fuse automatically */
  autoMergeAt?: number;
  start?: number;
  unitSize?: number;
  font?: string;
  /** colours override (road, sea…), merged over the theme palette */
  colors?: Partial<RoadColors>;
  onChange?: (s: { count: number; byRank: number[]; power: number }) => void;
  onMerge?: (rank: number) => void;
  onGate?: (value: number) => void;
}

interface RoadColors {
  sea: string;
  seaLine: string;
  road: string;
  roadLine: string;
  rail: string;
  railAlt: string;
  gate: string;
  gateEdge: string;
  gateText: string;
  gateTaken: string;
}

const THEMES: Record<CrowdTheme, RoadColors> = {
  blueprint: { sea: 'rgba(0,0,0,0)', seaLine: 'rgba(1,31,42,.10)', road: 'rgba(0,0,0,0)', roadLine: 'rgba(1,31,42,.14)', rail: '#011f2a', railAlt: 'rgba(0,0,0,0)', gate: 'rgba(255,106,19,.10)', gateEdge: '#011f2a', gateText: '#011f2a', gateTaken: 'rgba(255,106,19,.35)' },
};

const PAIRS: [number, number][] = [
  [5, 20],
  [30, 10],
  [15, 40],
  [50, 25],
  [10, 60],
];

export function createRunner(canvas: HTMLCanvasElement, opts: RunnerOptions = {}) {
  const theme = opts.theme ?? 'blueprint';
  const C = { ...THEMES[theme], ...opts.colors };
  const tier = deviceTier();
  const speed = opts.speed ?? 150;
  const gateEvery = opts.gateEvery ?? 2.6;
  const hordeEvery = opts.hordeEvery ?? 7;
  const autoMergeAt = opts.autoMergeAt ?? (tier === 'low' ? 40 : 70);
  const font = opts.font ?? '"Lilita One", system-ui, sans-serif';
  const steerEl = opts.steerEl ?? canvas;

  let offset = 0;
  let gates: Gate[] = [];
  let gateTimer = 0.6;
  let hordeTimer = hordeEvery * 0.6;
  let pairIndex = 0;
  let mergeTimer = 0;
  let lastInput = -10;
  let steerX = 0.5; // 0..1 across the road
  let clock = 0;

  const road = () => {
    const w = crowd.width;
    const rw = Math.max(220, Math.min(560, w * (opts.road ?? 0.5)));
    const x0 = (w - rw) / 2;
    return { x0, x1: x0 + rw, w: rw };
  };

  const crowd: Crowd = createCrowd(canvas, {
    theme,
    start: opts.start ?? 30,
    unitSize: opts.unitSize ?? (tier === 'low' ? 12 : 14),
    spacing: 8.5,
    maxUnits: tier === 'low' ? 260 : tier === 'mid' ? 420 : 600,
    onChange: opts.onChange,
    onMerge: (r) => opts.onMerge?.(r),
    onTick: tick,
    drawUnder,
  });

  function tick(dt: number) {
    clock += dt;
    offset = (offset + speed * dt) % 48;
    const R = road();
    const H = crowd.height;
    const front = H * 0.68;

    // steering: input, or autopilot towards the bigger gate
    if (clock - lastInput > 3) {
      const next = gates.find((g) => !g.taken && g.y < front);
      const want = next ? (next.right > next.left ? 0.75 : 0.25) : 0.5 + Math.sin(clock * 0.6) * 0.15;
      steerX += (want - steerX) * Math.min(1, dt * 1.6);
    }
    crowd.setAnchor(R.x0 + R.w * (0.12 + steerX * 0.76), front);

    // gates
    gateTimer -= dt;
    if (gateTimer <= 0) {
      const [l, r] = PAIRS[pairIndex++ % PAIRS.length];
      gates.push({ y: -70, left: l, right: r, taken: '', flash: 0 });
      gateTimer = gateEvery;
    }
    for (const g of gates) {
      g.y += speed * dt;
      g.flash = Math.max(0, g.flash - dt * 2);
      if (!g.taken && g.y >= crowd.anchor.y - 30) {
        const side = crowd.anchor.x < (R.x0 + R.x1) / 2 ? 'left' : 'right';
        g.taken = side;
        g.flash = 1;
        const v = side === 'left' ? g.left : g.right;
        const gx = side === 'left' ? R.x0 + R.w * 0.25 : R.x0 + R.w * 0.75;
        crowd.spawn(v, gx, g.y - 10);
        crowd.ring(gx, g.y, C.gateTaken, 20);
        opts.onGate?.(v);
      }
    }
    gates = gates.filter((g) => g.y < H + 80);

    // hordes
    if (hordeEvery > 0) {
      hordeTimer -= dt;
      if (hordeTimer <= 0) {
        const n = Math.min(tier === 'low' ? 60 : 140, 12 + Math.round(crowd.counts().count * 0.6));
        crowd.horde(n, (R.x0 + R.x1) / 2, -30, R.w * 0.8);
        hordeTimer = hordeEvery;
      }
    }

    // fusion: keep the legion readable by merging the lowest rank
    mergeTimer -= dt;
    if (mergeTimer <= 0) {
      const c = crowd.counts();
      const r = c.byRank.findIndex((n, i) => n >= (i === 0 ? autoMergeAt : 22));
      if (r >= 0 && r < 5) {
        crowd.merge(r);
        mergeTimer = 0.45;
      } else mergeTimer = 0.2;
    }
  }

  function drawUnder(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const R = road();
    // sea
    ctx.fillStyle = C.sea;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = C.seaLine;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    for (let y = -40; y < h + 40; y += 46) {
      for (let x = 20; x < w; x += 120) {
        if (x > R.x0 - 70 && x < R.x1 + 30) continue;
        const yy = y + ((offset * 0.6 + x * 0.37) % 46);
        ctx.beginPath();
        ctx.moveTo(x, yy);
        ctx.quadraticCurveTo(x + 9, yy - 5, x + 18, yy);
        ctx.quadraticCurveTo(x + 27, yy + 5, x + 36, yy);
        ctx.stroke();
      }
    }
    // road + tiles
    ctx.fillStyle = C.road;
    ctx.fillRect(R.x0, 0, R.w, h);
    ctx.strokeStyle = C.roadLine;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let y = -48 + offset; y < h; y += 48) {
      ctx.moveTo(R.x0, y);
      ctx.lineTo(R.x1, y);
    }
    for (let x = R.x0 + R.w / 8; x < R.x1 - 1; x += R.w / 8) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
    }
    ctx.stroke();
    // rails (red/white blocks)
    const rw = 10;
    for (let y = -48 + offset * 1; y < h; y += 24) {
      const alt = Math.floor((y - offset) / 24) % 2 === 0;
      ctx.fillStyle = alt ? C.rail : C.railAlt;
      ctx.fillRect(R.x0 - rw, y, rw, 24);
      ctx.fillRect(R.x1, y, rw, 24);
    }
    if (theme === 'blueprint') {
      ctx.strokeStyle = C.rail;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(R.x0, 0);
      ctx.lineTo(R.x0, h);
      ctx.moveTo(R.x1, 0);
      ctx.lineTo(R.x1, h);
      ctx.stroke();
    }
    // gates (under the units, so the legion runs through them)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const g of gates) {
      const half = R.w / 2;
      const sides: ['left' | 'right', number, number][] = [
        ['left', R.x0, g.left],
        ['right', R.x0 + half, g.right],
      ];
      for (const [side, x, v] of sides) {
        const taken = g.taken === side;
        const dim = g.taken && !taken;
        ctx.globalAlpha = dim ? 0.35 : 1;
        ctx.fillStyle = taken ? C.gateTaken : C.gate;
        ctx.fillRect(x + 6, g.y - 22, half - 12, 34);
        ctx.strokeStyle = C.gateEdge;
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 6, g.y - 22, half - 12, 34);
        ctx.fillStyle = C.gateText;
        ctx.font = `${Math.round(Math.min(26, half * 0.16))}px ${font}`;
        ctx.fillText(`+${v}`, x + half / 2, g.y - 4);
        if (taken && g.flash > 0) {
          ctx.globalAlpha = g.flash * 0.5;
          ctx.fillStyle = C.gateTaken;
          ctx.fillRect(x + 6, g.y - 22 - g.flash * 30, half - 12, 34 + g.flash * 60);
        }
      }
      ctx.globalAlpha = 1;
    }
  }

  /* ---------------------------------------------------------------- input */
  const setFromClientX = (clientX: number) => {
    const rect = canvas.getBoundingClientRect();
    const R = road();
    const x = clientX - rect.left;
    steerX = Math.min(1, Math.max(0, (x - R.x0 - R.w * 0.12) / (R.w * 0.76)));
    lastInput = clock;
  };
  const onMove = (e: PointerEvent) => {
    if (e.pointerType === 'mouse' || e.buttons || e.pointerType === 'pen') setFromClientX(e.clientX);
  };
  const onDown = (e: PointerEvent) => setFromClientX(e.clientX);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') steerX = Math.max(0, steerX - 0.2);
    else if (e.key === 'ArrowRight') steerX = Math.min(1, steerX + 0.2);
    else return;
    lastInput = clock;
    e.preventDefault();
  };
  steerEl.addEventListener('pointermove', onMove, { passive: true });
  steerEl.addEventListener('pointerdown', onDown, { passive: true });
  steerEl.addEventListener('keydown', onKey);
  if (canvas.style.touchAction === '') canvas.style.touchAction = 'pan-y';

  /* ----------------------------------------------------------------- loop */
  const loop = rafLoop((dt, t) => crowd.frame(dt, t));
  let visible = false;
  const reduce = prefersReducedMotion();
  const stopVis = whenVisible(
    canvas,
    () => {
      visible = true;
      if (!reduce) loop.start();
    },
    () => {
      visible = false;
      loop.stop();
    },
  );

  /** a calm, complete still frame for reduced motion */
  function still() {
    loop.stop();
    const R = road();
    crowd.setAnchor(R.x0 + R.w * 0.62, crowd.height * 0.66, true);
    crowd.set([46, 4, 2, 1]);
    gates = [{ y: crowd.height * 0.3, left: 10, right: 40, taken: '', flash: 0 }];
    crowd.draw(0, 0);
  }
  if (reduce) requestAnimationFrame(still);
  if (opts.font && document.fonts) document.fonts.load(`20px ${font}`).catch(() => {});

  return {
    crowd,
    start: () => !reduce && loop.start(),
    stop: () => loop.stop(),
    still,
    get visible() {
      return visible;
    },
    /** manual fusion (button) */
    merge: () => crowd.merge(),
    /** manual gate (button / tap): +n at the legion */
    boost: (n = 20) => crowd.spawn(n, crowd.anchor.x, crowd.anchor.y - 60),
    steer(x01: number) {
      steerX = Math.min(1, Math.max(0, x01));
      lastInput = clock;
    },
    destroy() {
      loop.destroy();
      stopVis();
      crowd.destroy();
      steerEl.removeEventListener('pointermove', onMove);
      steerEl.removeEventListener('pointerdown', onDown);
      steerEl.removeEventListener('keydown', onKey);
    },
  };
}

export type Runner = ReturnType<typeof createRunner>;
