/** Browser helpers: motion preference, input type, device class, visibility, rAF loop. */

const mq = (q: string) => (typeof matchMedia === 'function' ? matchMedia(q) : null);

const reduced = mq('(prefers-reduced-motion: reduce)');
const finePointer = mq('(hover: hover) and (pointer: fine)');

/** true when the visitor asked the OS for less motion */
export const prefersReducedMotion = () => !!reduced?.matches;

/** subscribe to changes of the reduced-motion preference; returns an unsubscribe */
export function onReducedMotionChange(cb: (reduce: boolean) => void): () => void {
  if (!reduced) return () => {};
  const h = (e: MediaQueryListEvent) => cb(e.matches);
  reduced.addEventListener('change', h);
  return () => reduced.removeEventListener('change', h);
}

/** a real mouse/trackpad (not touch) */
export const hasFinePointer = () => !!finePointer?.matches;

/** Data Saver / slow connection: skip videos and heavy extras */
export function prefersLightweight(): boolean {
  const c = (navigator as any).connection;
  return !!(c && (c.saveData || /(^|-)2g$/.test(c.effectiveType ?? '')));
}

/** rough device class, to size particle counts */
export function deviceTier(): 'low' | 'mid' | 'high' {
  const cores = navigator.hardwareConcurrency ?? 4;
  const mem = (navigator as any).deviceMemory ?? 4;
  if (cores <= 4 || mem <= 3) return 'low';
  if (cores <= 6 || mem <= 4 || !hasFinePointer()) return 'mid';
  return 'high';
}

/**
 * Run `onEnter` / `onLeave` when an element enters or leaves the viewport
 * (with a margin), e.g. to start/stop a canvas loop.
 */
export function whenVisible(el: Element, onEnter: () => void, onLeave: () => void, rootMargin = '200px 0px'): () => void {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) (e.isIntersecting ? onEnter : onLeave)();
    },
    { rootMargin },
  );
  io.observe(el);
  return () => io.disconnect();
}

/**
 * requestAnimationFrame loop that pauses itself when the tab is hidden.
 * `tick(dt, t)` gets seconds since last frame (clamped) and total time.
 */
export function rafLoop(tick: (dt: number, t: number) => void) {
  let id = 0;
  let last = 0;
  let running = false;
  const frame = (now: number) => {
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 1 / 60);
    last = now;
    tick(dt, now / 1000);
    if (running) id = requestAnimationFrame(frame);
  };
  const onVis = () => {
    if (document.hidden) cancelAnimationFrame(id);
    else if (running) {
      last = 0;
      id = requestAnimationFrame(frame);
    }
  };
  document.addEventListener('visibilitychange', onVis);
  return {
    start() {
      if (running) return;
      running = true;
      last = 0;
      id = requestAnimationFrame(frame);
    },
    stop() {
      running = false;
      cancelAnimationFrame(id);
    },
    get running() {
      return running;
    },
    destroy() {
      this.stop();
      document.removeEventListener('visibilitychange', onVis);
    },
  };
}

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** frame-rate independent smoothing factor */
export const damp = (lambda: number, dt: number) => 1 - Math.exp(-lambda * dt);

/**
 * Scroll-driven stories start at the top: a reload must not drop the visitor
 * mid-page with every scene above already played at once. A link to a section
 * (#readseal…) is still honoured.
 */
export function startAtTop() {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) scrollTo(0, 0);
}
