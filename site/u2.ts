/**
 * U3 · ReadSeal: the policy is read with the scroll, the counter climbs to 5/5, the wax seal stamps
 * "J'ai lu", then the register freezes. The HTML ships the final state; JS rewinds it.
 */
import { gsap } from 'gsap';
import type { Ctx } from './main.ts';
import { clamp } from '../shared/js/env.ts';

export function init(ctx: Ctx) {
  const sec = document.getElementById('readseal')!;
  const desk = sec.querySelector<HTMLElement>('.rs-desk')!;
  const body = sec.querySelector<HTMLElement>('.policy-body')!;
  const paras = [...sec.querySelectorAll<HTMLElement>('.pp')];
  const ruler = sec.querySelector<HTMLElement>('.rs-ruler')!;
  const counterBtn = sec.querySelector<HTMLButtonElement>('.rs-counter')!;
  const count = sec.querySelector<HTMLElement>('.rs-count')!;
  const pop = sec.querySelector<HTMLElement>('#rs-pop')!;
  const check = sec.querySelector<HTMLInputElement>('.rs-check')!;
  const btn = sec.querySelector<HTMLButtonElement>('.rs-btn')!;
  const qc = sec.querySelector<HTMLElement>('.qc')!;
  const seal = sec.querySelector<HTMLElement>('.seal')!;
  const policy = sec.querySelector<HTMLElement>('.policy')!;
  const reg = sec.querySelector<HTMLElement>('.reg-wrap')!;
  const regStamp = sec.querySelector<HTMLElement>('.reg-stamp')!;
  const labels = ctx.data.counter;

  const setPop = (open: boolean) => {
    pop.hidden = !open;
    counterBtn.setAttribute('aria-expanded', String(open));
  };
  counterBtn.addEventListener('click', () => setPop(Boolean(pop.hidden)));

  if (ctx.reduce) {
    // final state is in the HTML; only the popover stays interactive
    btn.addEventListener('click', () => (check.checked = true));
    return;
  }

  // rewind to the start of the story
  let n = 0;
  let sealed = false;
  let frozen = false;
  let powered = false;
  count.textContent = labels[0];
  check.checked = false;
  setPop(false);
  desk.classList.remove('is-sealed');
  paras.forEach((p) => p.classList.remove('is-read'));
  reg.classList.remove('is-frozen');
  ruler.style.setProperty('--p', '0');

  function setCount(k: number) {
    if (k === n) return;
    n = k;
    count.textContent = labels[k];
    count.classList.remove('is-bump');
    void count.offsetWidth;
    count.classList.add('is-bump');
  }

  function doSeal() {
    if (sealed) return;
    sealed = true;
    setCount(5);
    check.checked = true;
    desk.classList.add('is-sealed');
    const tl = gsap.timeline();
    tl.to(qc, { scale: 1.15, opacity: 0, rotation: -14, duration: 0.25, ease: 'power2.in' }, 0);
    tl.fromTo(seal, { scale: 2.4, opacity: 0, rotation: -38 }, { scale: 1, opacity: 1, rotation: -10, duration: 0.32, ease: 'power4.in' }, 0.12);
    tl.fromTo(policy, { x: 0 }, { x: 2, duration: 0.05, yoyo: true, repeat: 3, ease: 'none', clearProps: 'x' }, 0.44);
    tl.fromTo(seal, { scale: 1 }, { scale: 1.04, duration: 0.12, yoyo: true, repeat: 1 }, 0.44);
    // the attestation closes once sealed (the counter stays at 5/5 and can reopen it)
    setTimeout(() => setPop(false), 2400);
  }

  function freeze() {
    if (frozen) return;
    frozen = true;
    reg.classList.add('is-frozen');
    gsap.fromTo(regStamp, { scale: 1.8, opacity: 0 }, { scale: 1, opacity: 0.92, duration: 0.3, ease: 'power4.in', delay: 0.35 });
  }

  btn.addEventListener('click', () => {
    check.checked = true;
    doSeal();
  });

  let raf = 0;
  function measure() {
    raf = 0;
    if (!powered) return;
    // the reading line sits low in the screen: the policy is read as it comes into view,
    // so the attestation, the seal and the frozen register happen while they are on screen
    const line = innerHeight * 0.74;
    const b = body.getBoundingClientRect();
    ruler.style.setProperty('--p', clamp((line - b.top) / b.height).toFixed(4));
    let read = 0;
    paras.forEach((p, i) => {
      const r = p.getBoundingClientRect();
      const isRead = r.top + Math.min(r.height, 40) < line;
      p.classList.toggle('is-read', isRead || sealed);
      if (isRead && i > 0) read++;
    });
    if (!sealed) {
      setCount(Math.min(5, read));
      if (read >= 5 && paras.every((p) => p.classList.contains('is-read'))) {
        setPop(true);
        check.checked = true;
        setTimeout(doSeal, 400);
      }
    }
    const rg = reg.getBoundingClientRect();
    if (rg.top < innerHeight * 0.55) freeze();
  }
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(measure);
  };
  addEventListener('scroll', onScroll, { passive: true });

  ctx.onComponent('u2', {
    power: () => {
      powered = true;
      measure();
    },
    pulse: () => {
      ruler.classList.remove('is-flash');
      void ruler.offsetWidth;
      ruler.classList.add('is-flash');
    },
  });
}
