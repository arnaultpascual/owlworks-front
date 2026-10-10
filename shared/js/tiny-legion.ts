/**
 * Embeds the real Tiny Legion game (public/tiny-legion/) in an iframe, loaded when its container
 * comes near, paused off screen, steered by the page (pointer X over `steerEl`, drag, ← →).
 * With reduced motion or Data Saver nothing loads until `load()` is called.
 */
import { prefersReducedMotion, prefersLightweight, hasFinePointer } from './env.ts';

export type TLScene = 'battle' | 'evolve' | 'parade' | 'map';
export interface TLState {
  army: number;
  tier: number;
  rank: string;
  wave: number;
  state: string;
}
export interface TLOptions {
  scene?: TLScene;
  params?: Record<string, string | number>;
  steerEl?: HTMLElement;
  title?: string;
  /** start loading when the container is this close to the viewport */
  rootMargin?: string;
  /** load by itself when near (default: true, except reduced motion / Data Saver) */
  autoload?: boolean;
  onReady?: () => void;
  onState?: (s: TLState) => void;
  onEvolve?: (e: { tier: number; rank: string }) => void;
  onGain?: (n: number) => void;
  onError?: (message: string) => void;
}

const SHOWCASE = '/tiny-legion/index.html';

export function mountTinyLegion(container: HTMLElement, o: TLOptions = {}) {
  let iframe: HTMLIFrameElement | null = null;
  let ready = false;
  let visible = false;
  const queue: unknown[] = [];

  const send = (msg: Record<string, unknown>) => {
    const m = { tl: 1, ...msg };
    if (iframe?.contentWindow && ready) iframe.contentWindow.postMessage(m, location.origin);
    else if (msg.cmd !== 'steer') queue.push(m);
  };

  function load() {
    if (iframe) return;
    const q = new URLSearchParams({ scene: o.scene ?? 'battle', ...Object.fromEntries(Object.entries(o.params ?? {}).map(([k, v]) => [k, String(v)])) });
    if (!visible) q.set('paused', '1');
    iframe = document.createElement('iframe');
    iframe.src = `${SHOWCASE}?${q}`;
    iframe.title = o.title ?? 'Tiny Legion';
    iframe.tabIndex = -1;
    iframe.setAttribute('aria-hidden', 'true');
    iframe.setAttribute('allow', 'autoplay');
    iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none;opacity:0;transition:opacity .6s ease';
    iframe.addEventListener('load', () => setTimeout(() => iframe && (iframe.style.opacity = '1'), 250));
    if (getComputedStyle(container).position === 'static') container.style.position = 'relative';
    container.appendChild(iframe);
    container.dataset.tl = 'loading';
  }

  const onMessage = (e: MessageEvent) => {
    if (!iframe || e.source !== iframe.contentWindow || !e.data?.tl) return;
    const d = e.data;
    if (d.type === 'ready') {
      ready = true;
      container.dataset.tl = 'ready';
      queue.splice(0).forEach((m) => iframe!.contentWindow!.postMessage(m, location.origin));
      send({ cmd: visible && !document.hidden ? 'resume' : 'pause' });
      o.onReady?.();
    } else if (d.type === 'state') o.onState?.(d as TLState);
    else if (d.type === 'evolve') o.onEvolve?.({ tier: d.tier, rank: d.rank });
    else if (d.type === 'gain') o.onGain?.(d.n);
    else if (d.type === 'error') {
      container.dataset.tl = 'error';
      o.onError?.(d.message);
    }
  };
  addEventListener('message', onMessage);

  // lifecycle: load when near, run only when on screen and the tab is visible
  const auto = o.autoload ?? !(prefersReducedMotion() || prefersLightweight());
  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      if (visible && auto) load();
      send({ cmd: visible && !document.hidden ? 'resume' : 'pause' });
    },
    { rootMargin: o.rootMargin ?? '300px 0px' },
  );
  io.observe(container);
  const onVis = () => send({ cmd: !document.hidden && visible ? 'resume' : 'pause' });
  document.addEventListener('visibilitychange', onVis);

  // steering, from the page
  const el = o.steerEl;
  let frame = 0;
  let pendingX = 0;
  let dragStart: { x: number; v: number } | null = null;
  let lastX = 0;
  const steer = (x: number) => {
    pendingX = Math.max(-1, Math.min(1, x));
    lastX = pendingX;
    if (!frame)
      frame = requestAnimationFrame(() => {
        frame = 0;
        send({ cmd: 'steer', x: pendingX });
      });
  };
  const rel = (clientX: number) => {
    const r = container.getBoundingClientRect();
    return ((clientX - r.left) / Math.max(1, r.width)) * 2 - 1;
  };
  const onMove = (e: PointerEvent) => {
    if (e.pointerType === 'mouse' && hasFinePointer()) steer(rel(e.clientX) * 1.15);
    else if (dragStart) steer(dragStart.v + ((e.clientX - dragStart.x) / Math.max(1, container.clientWidth)) * 2.4);
  };
  const onDown = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') dragStart = { x: e.clientX, v: lastX };
  };
  const onUp = () => (dragStart = null);
  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    steer(lastX + (e.key === 'ArrowLeft' ? -0.35 : 0.35));
  };
  if (el) {
    el.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerdown', onDown, { passive: true });
    addEventListener('pointerup', onUp, { passive: true });
    addEventListener('pointercancel', onUp, { passive: true });
    el.addEventListener('keydown', onKey);
    el.addEventListener('pointerleave', () => send({ cmd: 'auto' }));
    if (!el.style.touchAction) el.style.touchAction = 'pan-y';
  }

  return {
    load,
    get loaded() {
      return !!iframe;
    },
    get ready() {
      return ready;
    },
    steer,
    /** give the legion back to the autopilot */
    auto: () => send({ cmd: 'auto' }),
    /** +n soldiers, as if through a gate */
    gate: (n = 20) => send({ cmd: 'gate', n }),
    pause: () => send({ cmd: 'pause' }),
    resume: () => send({ cmd: 'resume' }),
    destroy() {
      io.disconnect();
      removeEventListener('message', onMessage);
      document.removeEventListener('visibilitychange', onVis);
      if (el) {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerdown', onDown);
        el.removeEventListener('keydown', onKey);
      }
      removeEventListener('pointerup', onUp);
      removeEventListener('pointercancel', onUp);
      iframe?.remove();
      iframe = null;
    },
  };
}

export type TinyLegionEmbed = ReturnType<typeof mountTinyLegion>;
