/** The owl drawn as a dimensioned plate from the real geometry of shared/brand/owl.ts (build time). */
import { OWL_GROUPS, OWL_POINTS } from '../shared/brand/owl.ts';
import { COPY } from './copy.ts';

type Pt = [number, number];
const f = (n: number) => (Math.round(n * 10) / 10).toString();
const rad = (d: number) => (d * Math.PI) / 180;
const on = (c: Pt, r: number, deg: number): Pt => [c[0] + r * Math.cos(rad(deg)), c[1] + r * Math.sin(rad(deg))];

/** visible window of the plate, in owl coordinates */
export const PLAN_VIEW = { x: 170, y: 196, w: 1080, h: 858 };
/** where the page trace leaves the owl: outer edge of the right via */
export const PLAN_EXIT: Pt = [1072, OWL_POINTS.perchY];
export const PLAN_EXIT_LEFT: Pt = [272, OWL_POINTS.perchY];

const EL: Pt = [...OWL_POINTS.eyeL] as Pt;
const ER: Pt = [...OWL_POINTS.eyeR] as Pt;
const GEAR: Pt = [...OWL_POINTS.gear] as Pt;
const CROWN: Pt = [672, 495.6];
const VIA_L: Pt = [303.5, 922];
const VIA_R: Pt = [1040.5, 922];
const AX = OWL_POINTS.axis;

const circle = (c: Pt, r: number, cls = '') =>
  `<circle class="dr ${cls}" pathLength="1" cx="${f(c[0])}" cy="${f(c[1])}" r="${r}"/>`;
const line = (a: Pt, b: Pt, cls = '') => `<path class="${cls}" pathLength="1" d="M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}"/>`;
const poly = (pts: Pt[], cls = '') => `<path class="${cls}" pathLength="1" d="M${pts.map((p) => `${f(p[0])} ${f(p[1])}`).join('L')}"/>`;

/** filled arrowhead whose tip is at `tip`, pointing along `dir` (degrees) */
function arrow(tip: Pt, dir: number): string {
  const L = 17, W = 4.6;
  const back: Pt = [tip[0] - L * Math.cos(rad(dir)), tip[1] - L * Math.sin(rad(dir))];
  const n: Pt = [-Math.sin(rad(dir)) * W, Math.cos(rad(dir)) * W];
  return `<path class="pl-arrow" d="M${f(tip[0])} ${f(tip[1])}L${f(back[0] + n[0])} ${f(back[1] + n[1])}L${f(back[0] - n[0])} ${f(back[1] - n[1])}Z"/>`;
}
const text = (p: Pt, s: string, anchor: 'start' | 'middle' | 'end' = 'start', cls = '') =>
  `<text class="pl-txt ${cls}" x="${f(p[0])}" y="${f(p[1])}" text-anchor="${anchor}">${s}</text>`;
const centre = (c: Pt, s = 15) =>
  `<path class="pl-ctr" d="M${f(c[0] - s)} ${f(c[1])}H${f(c[0] + s)}M${f(c[0])} ${f(c[1] - s)}V${f(c[1] + s)}"/>`;

/** one annotation = one <g> so it can be revealed as a unit */
const note = (cls: string, inner: string, i: number) => `<g class="pl-note ${cls}" style="--i:${i}">${inner}</g>`;

export function planSVG(): string {
  const N = COPY.hero.notes;
  const V = PLAN_VIEW;

  /* ---- construction: circles the mark is built on */
  const cons = [
    circle(EL, 124), circle(EL, 99), circle(ER, 124), circle(ER, 99),
    circle(GEAR, 65), circle(CROWN, 147.6, 'pl-crown-c'),
    circle(VIA_L, 31.5), circle(VIA_R, 31.5),
  ].join('');

  /* ---- chain lines (axes) */
  const axes =
    `<path class="pl-axis pl-axis-v" d="M${AX} 214V1046"/>` +
    `<path class="pl-axis pl-axis-h" d="M376 513H968"/>` +
    `<path class="pl-axis pl-axis-p" d="M236 922H1108"/>`;

  /* ---- centre marks */
  const ctrs = [EL, ER, CROWN, VIA_L, VIA_R].map((c) => centre(c)).join('');

  /* ---- the mark itself, every shape drawable */
  const owl = OWL_GROUPS.replace(/ id="([a-z-]+)"/g, ' id="pl-$1"').replace(
    /<(path|rect|circle)( class="([^"]*)")?/g,
    (_m, tag: string, _c: string, cls: string | undefined) => `<${tag} class="dr ${cls ?? ''}" pathLength="1"`,
  );

  /* ---- dimensions & notes */
  const notes: string[] = [];
  let i = 0;

  // 264 between the eye centres
  notes.push(
    note(
      'pl-n-between',
      line([EL[0], 366], [EL[0], 232], 'dr pl-ext') +
        line([ER[0], 366], [ER[0], 232], 'dr pl-ext') +
        line([EL[0], 250], [ER[0], 250], 'dr pl-dimline') +
        arrow([EL[0], 250], 180) +
        arrow([ER[0], 250], 0) +
        text([AX, 241], N.between, 'middle', 'pl-big'),
      i++,
    ),
  );

  // axis of symmetry label
  notes.push(note('pl-n-axis', text([AX + 12, 222], N.axis, 'start', 'pl-small'), i++));

  // ear angle (left ear tip, top edge vs horizontal)
  const tip: Pt = [415, 309];
  const ang = (Math.atan2(407.2 - 309, 604.6 - 415) * 180) / Math.PI; // 27.4°
  const a0: Pt = [tip[0] + 84, tip[1]];
  const a1 = on(tip, 84, ang);
  notes.push(
    note(
      'pl-n-ear',
      line(tip, [tip[0] + 112, tip[1]], 'dr pl-ext') +
        `<path class="dr pl-dimline" pathLength="1" d="M${f(a0[0])} ${f(a0[1])}A84 84 0 0 1 ${f(a1[0])} ${f(a1[1])}"/>` +
        text([tip[0] + 24, tip[1] - 12], N.ear, 'start', 'pl-small'),
      i++,
    ),
  );

  // 8 teeth / R65 · R52, leader from the upper-left tooth
  {
    const p = on(GEAR, 65, -135);
    const q = on(GEAR, 152, -135);
    const end: Pt = [222, q[1]];
    notes.push(
      note(
        'pl-n-gear',
        poly([p, q, end], 'dr pl-leader') + arrow(p, 45) +
          text([end[0] + 2, q[1] - 10], N.teeth, 'start') +
          text([end[0] + 2, q[1] + 26], N.gear, 'start', 'pl-small'),
        i++,
      ),
    );
  }

  // Ø 248 on the gear eye
  {
    const p = on(EL, 124, 160);
    const q = on(EL, 190, 160);
    const end: Pt = [222, q[1]];
    notes.push(note('pl-n-dia', poly([p, q, end], 'dr pl-leader') + arrow(p, -20) + text([end[0] + 2, q[1] - 10], N.dia, 'start'), i++));
  }

  // R124 and R99 on the target eye: radius lines from the centre
  {
    const p = on(ER, 124, -40);
    const q = on(ER, 192, -40);
    const end: Pt = [1112, q[1]];
    notes.push(
      note('pl-n-r124', poly([ER, p, q, end], 'dr pl-leader') + arrow(p, -40) + text([end[0] - 2, q[1] - 10], N.r124, 'end'), i++),
    );
    const p2 = on(ER, 99, 30);
    const q2 = on(ER, 192, 30);
    const end2: Pt = [1112, q2[1]];
    notes.push(
      note('pl-n-r99', poly([ER, p2, q2, end2], 'dr pl-leader') + arrow(p2, 30) + text([end2[0] - 2, q2[1] - 10], N.r99, 'end'), i++),
    );
  }

  // via
  {
    const p = on(VIA_L, 31.5, -135);
    const q = on(VIA_L, 78, -135);
    const end: Pt = [186, q[1]];
    notes.push(note('pl-n-via', poly([p, q, end], 'dr pl-leader') + arrow(p, 45) + text([end[0] + 2, q[1] - 10], N.via, 'start', 'pl-small'), i++));
  }

  // 737 between the vias
  notes.push(
    note(
      'pl-n-perch',
      line([VIA_L[0], 962], [VIA_L[0], 1030], 'dr pl-ext') +
        line([VIA_R[0], 962], [VIA_R[0], 1030], 'dr pl-ext') +
        line([VIA_L[0], 1016], [VIA_R[0], 1016], 'dr pl-dimline') +
        arrow([VIA_L[0], 1016], 180) +
        arrow([VIA_R[0], 1016], 0) +
        text([AX, 1007], N.perch, 'middle', 'pl-big'),
      i++,
    ),
  );

  return (
    `<svg class="plan" xmlns="http://www.w3.org/2000/svg" viewBox="${V.x} ${V.y} ${V.w} ${V.h}" role="img" aria-label="${COPY.a11y.plan}" data-exit="${PLAN_EXIT.join(',')}" data-exit-left="${PLAN_EXIT_LEFT.join(',')}">` +
    `<g class="pl-cons">${cons}</g>` +
    `<g class="pl-axes">${axes}</g>` +
    `<g class="pl-ctrs">${ctrs}</g>` +
    `<g class="pl-owl">${owl}</g>` +
    `<g class="pl-dims">${notes.join('')}</g>` +
    `</svg>`
  );
}
