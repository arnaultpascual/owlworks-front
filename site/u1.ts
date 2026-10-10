/**
 * U2 · Tiny Legion: the blueprint runner until powered, then the section takes the game's colours
 * and the real game boots in the component's screen (a screenshot and a button with reduced motion).
 */
import type { Ctx } from './main.ts';
import { createRunner, type Runner } from '../shared/js/runner.ts';
import { mountTinyLegion, type TinyLegionEmbed } from '../shared/js/tiny-legion.ts';
import { prefersLightweight } from '../shared/js/env.ts';

export function init(ctx: Ctx) {
  const sec = document.getElementById('tiny-legion')!;
  const stage = sec.querySelector<HTMLElement>('.tl-stage')!;
  const canvas = stage.querySelector<HTMLCanvasElement>('canvas.tl-canvas')!;
  const lcd = stage.querySelector<HTMLElement>('.tl-lcd')!;
  const power = sec.querySelector<HTMLButtonElement>('.btn--power')!;
  const powerLabel = power.querySelector<HTMLElement>('[data-label]')!;
  const boost = sec.querySelector<HTMLButtonElement>('.btn--boost')!;
  const merge = sec.querySelector<HTMLButtonElement>('.btn--merge')!;
  const countV = sec.querySelector<HTMLElement>('.tl-count-v')!;
  const rankEl = sec.querySelector<HTMLElement>('.tl-rank')!;
  const live = sec.querySelector<HTMLElement>('.tl-evolve')!;
  const light = ctx.reduce || prefersLightweight();

  let runner: Runner | null = null;
  let game: TinyLegionEmbed | null = null;
  let state: 'plan' | 'game' = 'plan';
  let lastCount = -1;
  let lastAnnounce = 0;

  const announce = (s: string, force = false) => {
    const now = performance.now();
    if (!force && now - lastAnnounce < 6000) return;
    lastAnnounce = now;
    live.textContent = s;
  };
  const showCount = (n: number) => {
    if (n === lastCount) return;
    lastCount = n;
    countV.textContent = String(n);
    const L = ctx.data.legionLive;
    announce((n === 1 ? L.one : L.other).replace('{n}', String(n)));
  };

  function ensureRunner() {
    if (runner) return runner;
    runner = createRunner(canvas, {
      theme: 'blueprint',
      steerEl: stage,
      font: '"JetBrains Mono", ui-monospace, monospace',
      road: 0.56,
      start: 24,
      onChange: (s) => state === 'plan' && showCount(s.count),
    });
    return runner;
  }

  function loadGame() {
    if (!game) {
      game = mountTinyLegion(lcd, {
        scene: 'battle',
        params: { wave: 3, value: 40, lang: ctx.data.lang },
        steerEl: stage,
        title: ctx.data.tl.frameTitle,
        autoload: false,
        onReady: () => syncLabels(),
        onState: (s) => {
          if (state !== 'game') return;
          showCount(s.army);
          rankEl.textContent = s.rank;
        },
        onEvolve: (e) => {
          announce(ctx.data.tl.evolved.replace('{rank}', e.rank), true);
          rankEl.textContent = e.rank;
          rankEl.classList.remove('is-evolve');
          void rankEl.offsetWidth;
          rankEl.classList.add('is-evolve');
        },
      });
    }
    delete sec.dataset.fallback;
    game.load();
    game.resume();
  }

  function syncLabels() {
    const g = state === 'game';
    sec.querySelectorAll<HTMLElement>('[data-plan][data-game]').forEach((el) => (el.textContent = g ? el.dataset.game! : el.dataset.plan!));
    power.setAttribute('aria-pressed', String(g));
    // in game state without the live game (light mode), the button offers to start it
    powerLabel.textContent = g ? (game?.loaded ? power.dataset.on! : ctx.data.tl.powerOn) : power.dataset.off!;
    if (g && !game?.loaded) power.setAttribute('aria-pressed', 'false');
  }

  function setOrigin() {
    const s = sec.getBoundingClientRect();
    const r = stage.getBoundingClientRect();
    sec.style.setProperty('--ox', `${((r.left + r.width / 2 - s.left) / s.width) * 100}%`);
    sec.style.setProperty('--oy', `${r.top + r.height / 2 - s.top}px`);
  }

  function powerOn(auto: boolean) {
    if (state === 'game') return;
    setOrigin();
    state = 'game';
    sec.dataset.state = 'game';
    document.documentElement.classList.add('tl-game-on');
    runner?.stop();
    rankEl.textContent = '';
    if (light && auto) sec.dataset.fallback = '';
    else loadGame();
    mountVideo();
    syncLabels();
  }

  function powerOff() {
    if (state === 'plan') return;
    state = 'plan';
    sec.dataset.state = 'plan';
    document.documentElement.classList.remove('tl-game-on');
    game?.pause();
    rankEl.textContent = '';
    delete sec.dataset.fallback;
    const r = ensureRunner();
    lastCount = -1;
    showCount(r.crowd.counts().count);
    if (!ctx.reduce) r.start();
    syncLabels();
  }

  power.addEventListener('click', () => {
    if (state === 'plan') powerOn(false);
    else if (!game?.loaded) loadGame(), syncLabels();
    else powerOff();
  });
  boost.addEventListener('click', () => {
    if (state === 'game' && game?.ready) game.gate(20);
    else if (state === 'plan') runner?.boost(20);
  });
  merge.addEventListener('click', () => runner?.merge());

  // the game's own loop (muted video), only once the game has the page, never in light mode
  const vfig = sec.querySelector<HTMLElement>('[data-video]');
  const poster = vfig?.querySelector<HTMLImageElement>('img');
  let videoDone = false;
  function mountVideo() {
    if (videoDone || light || !vfig || !poster) return;
    videoDone = true;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const v = document.createElement('video');
        v.muted = true;
        v.loop = true;
        v.playsInline = true;
        v.autoplay = true;
        v.preload = 'none';
        v.poster = poster.currentSrc || poster.src;
        v.setAttribute('aria-label', poster.alt);
        v.width = poster.width;
        v.height = poster.height;
        for (const [src, type] of [
          // static URLs (Vite fingerprints them): the English cut on /en/
          ...(ctx.data.lang === 'en'
            ? [
                [new URL('../shared/video/tl-loop-en.webm', import.meta.url).href, 'video/webm'],
                [new URL('../shared/video/tl-loop-en.mp4', import.meta.url).href, 'video/mp4'],
              ]
            : [
                [new URL('../shared/video/tl-loop.webm', import.meta.url).href, 'video/webm'],
                [new URL('../shared/video/tl-loop.mp4', import.meta.url).href, 'video/mp4'],
              ]),
        ]) {
          const s = document.createElement('source');
          s.src = src;
          s.type = type;
          v.appendChild(s);
        }
        poster.replaceWith(v);
        v.play().catch(() => {});
        new IntersectionObserver(([x]) => (x.isIntersecting ? v.play().catch(() => {}) : v.pause())).observe(v);
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(vfig);
  }

  // first state
  sec.dataset.init = '';
  if (ctx.reduce) {
    // calm and complete: already powered, a real screenshot in the LCD
    state = 'game';
    sec.dataset.state = 'game';
    sec.dataset.fallback = '';
    document.documentElement.classList.add('tl-game-on');
    syncLabels();
  } else {
    sec.dataset.state = 'plan';
    ensureRunner();
    syncLabels();
  }

  ctx.onComponent('u1', {
    power: () => powerOn(true),
    pulse: () => {
      if (state === 'plan') runner?.boost(5);
    },
  });
}
