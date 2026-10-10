/** U1 · ThirdWatch on the test bench: uptime on the oscilloscope, a token TTL that expires and renews, test points TP1–TP4 (demo values). */
import type { Ctx } from './main.ts';
import { rafLoop, whenVisible } from '../shared/js/env.ts';

const TTL = 15;
const B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const rnd = (n: number) => Array.from({ length: n }, () => B64[(Math.random() * 64) | 0]).join('');
const token = () => `eyJhbGciOiJIUzI1NiJ9.${rnd(22)}.${rnd(28)}`;

export function init(ctx: Ctx) {
  const sec = document.getElementById('thirdwatch')!;
  const canvas = sec.querySelector<HTMLCanvasElement>('.scope-c')!;
  const ms = sec.querySelector<HTMLElement>('.scope-ms')!;
  const chip = sec.querySelector<HTMLElement>('.t555')!;
  const ttlV = chip.querySelector<HTMLElement>('.ttl-v')!;
  const bar = chip.querySelector<HTMLElement>('.t555-bar')!;
  const tok = chip.querySelector<HTMLElement>('.t555-tok')!;
  const stateP = chip.querySelector<HTMLElement>('.t555-state')!;
  const stateT = stateP.querySelector<HTMLElement>('span')!;
  const tps = [...sec.querySelectorAll<HTMLElement>('.tp')];
  const g = canvas.getContext('2d')!;

  let W = 0, H = 0, dpr = 1;
  const size = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(2, devicePixelRatio || 1);
    W = r.width;
    H = r.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, W, H);
    lastX = -1;
  };

  /* --- the signal: a flat line with a beat per check (height ~ latency) */
  const beatEvery = 1.7;
  let beats: { t: number; amp: number }[] = [];
  const latency = () => Math.round(130 + Math.random() * 120 + (Math.random() < 0.08 ? 180 : 0));
  function signal(t: number): number {
    const base = H * 0.66;
    let y = base + Math.sin(t * 37) * 0.6;
    for (const b of beats) {
      const d = t - b.t;
      if (d < -0.05 || d > 0.4) continue;
      const k = H * 0.0017 * b.amp;
      if (d < 0) y += (d + 0.05) * 40 * 3; // small dip
      else if (d < 0.05) y -= (d / 0.05) * k;
      else if (d < 0.11) y -= k * (1 - (d - 0.05) / 0.06) - (d - 0.05) * 160;
      else if (d < 0.22) y += 10 * Math.sin(((d - 0.11) / 0.11) * Math.PI);
    }
    return y;
  }

  /* --- sweep */
  const sweep = 10; // seconds per screen (10 divisions: 1 s/div)
  let lastX = -1;
  let lastY = 0;
  function drawScope(t: number) {
    if (!W) return;
    const x = ((t % sweep) / sweep) * W;
    if (lastX < 0 || x < lastX) {
      // wrap: start a new pass
      lastX = 0;
      lastY = signal(t - (x / W) * sweep);
    }
    // erase ahead of the beam
    g.clearRect(x + 1, 0, 18, H);
    g.lineJoin = 'round';
    g.lineCap = 'round';
    const pts: [number, number][] = [[lastX, lastY]];
    for (let px = lastX + 1.5; px <= x; px += 1.5) pts.push([px, signal(t - ((x - px) / W) * sweep)]);
    pts.push([x, signal(t)]);
    for (const [w, c] of [
      [6, 'rgba(74,222,128,0.16)'],
      [1.8, '#4ade80'],
    ] as const) {
      g.lineWidth = w;
      g.strokeStyle = c;
      g.beginPath();
      pts.forEach(([px, py], i) => (i ? g.lineTo(px, py) : g.moveTo(px, py)));
      g.stroke();
    }
    lastX = x;
    lastY = pts[pts.length - 1][1];
  }

  /* --- 555: token TTL */
  let ttlLeft = TTL;
  let tokState: 'valid' | 'expired' | 'refreshed' = 'valid';
  let announced = 0;
  const setTok = (s: typeof tokState) => {
    tokState = s;
    chip.dataset.state = s;
    stateT.textContent = s === 'valid' ? ctx.data.tw.valid : s === 'expired' ? ctx.data.tw.expired : ctx.data.tokenRefreshed;
    if (s === 'refreshed' && ++announced > 2) stateP.removeAttribute('role');
  };
  const fmt = (s: number) => `00:${String(Math.max(0, Math.ceil(s))).padStart(2, '0')}`;

  /* --- scenario test points */
  const scenarioEvery = 7;
  function drawTps(t: number) {
    const k = t % scenarioEvery;
    tps.forEach((tp, i) => {
      const at = 0.4 + i * 0.75;
      tp.classList.toggle('is-hot', k >= at && k < at + 0.35);
      tp.classList.toggle('is-ok', k >= at + 0.35 && k < scenarioEvery - 1.2);
    });
  }

  if (ctx.reduce) {
    // calm: one still trace, a fresh token, a passed scenario
    requestAnimationFrame(() => {
      size();
      beats = [0.6, 2.3, 4.0, 5.7].map((t) => ({ t, amp: 170 }));
      lastX = -1;
      for (let t = 0; t <= sweep * 0.98; t += 0.05) drawScope(t);
      ms.textContent = '170';
    });
    tps.forEach((tp) => tp.classList.add('is-ok'));
    chip.dataset.state = 'refreshed';
    return;
  }

  // idle: a dim flat line until the current reaches the probe
  requestAnimationFrame(() => {
    if (powered || !W) return;
    g.strokeStyle = 'rgba(74,222,128,0.35)';
    g.lineWidth = 1.2;
    g.beginPath();
    g.moveTo(0, H * 0.66);
    g.lineTo(W, H * 0.66);
    g.stroke();
  });
  setTok('valid');
  ttlV.textContent = fmt(TTL);
  tok.textContent = token();
  let clock = 0;
  let nextBeat = 0.4;
  let powered = false;
  let visible = false;

  const loop = rafLoop((dt) => {
    clock += dt;
    // beats
    if (clock >= nextBeat) {
      const amp = latency();
      beats.push({ t: nextBeat, amp });
      beats = beats.filter((b) => clock - b.t < 1);
      ms.textContent = String(amp);
      nextBeat += beatEvery;
    }
    drawScope(clock);
    // ttl
    if (tokState !== 'expired') {
      ttlLeft -= dt;
      bar.style.setProperty('--ttl', Math.max(0, ttlLeft / TTL).toFixed(3));
      ttlV.textContent = fmt(ttlLeft);
      if (tokState === 'refreshed' && TTL - ttlLeft > 2.5) setTok('valid');
      if (ttlLeft <= 0) {
        setTok('expired');
        setTimeout(() => {
          ttlLeft = TTL;
          tok.textContent = token();
          setTok('refreshed');
        }, 900);
      }
    }
    drawTps(clock);
  });

  const run = () => (powered && visible ? loop.start() : loop.stop());
  whenVisible(
    sec,
    () => {
      visible = true;
      run();
    },
    () => {
      visible = false;
      run();
    },
    '0px',
  );
  new ResizeObserver(size).observe(canvas);
  size();

  /** ThirdWatch takes the page: the black bench floods out of the oscilloscope */
  function flood() {
    if (sec.classList.contains('is-flooded')) return;
    const s = sec.getBoundingClientRect();
    const r = canvas.getBoundingClientRect();
    sec.style.setProperty('--ox', `${((r.left + r.width / 2 - s.left) / s.width) * 100}%`);
    sec.style.setProperty('--oy', `${r.top + r.height / 2 - s.top}px`);
    sec.classList.add('is-flooded');
    document.documentElement.classList.add('tw-flooded');
  }
  if (ctx.reduce) {
    sec.classList.add('is-flooded');
    document.documentElement.classList.add('tw-flooded');
  } else {
    // the bench takes the page as soon as the section reaches the upper third of the screen
    // (the current reaching the probe, further down, then powers the instruments)
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          flood();
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -66% 0px' },
    );
    io.observe(sec);
  }

  ctx.onComponent('u3', {
    power: () => {
      powered = true;
      flood();
      run();
    },
    pulse: () => {
      // current at the probe: an extra check right now
      nextBeat = clock + 0.05;
    },
  });
}
