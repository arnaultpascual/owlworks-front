/**
 * The OwlWorks owl as geometry, in the coordinates of assets/owlworks/owlworks-logo-source.png
 * (scripts/logo-compare.mjs checks it against the PNG). Named groups for animation:
 * ears · crown · eye-gear (.gear) · eye-target (.pupil) · beak · body · wings · perch · frame · wordmark.
 * Colours: --owl-ink and --owl-accent.
 */

type Pt = readonly [number, number];

const AX = 672; // axis of symmetry
const mx = (p: Pt): Pt => [2 * AX - p[0], p[1]];
const f = (n: number) => (Math.round(n * 10) / 10).toString();
const P = (p: Pt) => `${f(p[0])} ${f(p[1])}`;
const rad = (deg: number) => (deg * Math.PI) / 180;
const onCircle = (c: Pt, r: number, deg: number): Pt => [c[0] + r * Math.cos(rad(deg)), c[1] + r * Math.sin(rad(deg))];

type Cubic = [Pt, Pt, Pt, Pt];
const bez = (c: Cubic, t: number): Pt => {
  const u = 1 - t;
  return [
    u * u * u * c[0][0] + 3 * u * u * t * c[1][0] + 3 * u * t * t * c[2][0] + t * t * t * c[3][0],
    u * u * u * c[0][1] + 3 * u * u * t * c[1][1] + 3 * u * t * t * c[2][1] + t * t * t * c[3][1],
  ];
};
const lerp = (a: Pt, b: Pt, t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
/** de Casteljau split */
const split = (c: Cubic, t: number): [Cubic, Cubic] => {
  const ab = lerp(c[0], c[1], t), bc = lerp(c[1], c[2], t), cd = lerp(c[2], c[3], t);
  const abc = lerp(ab, bc, t), bcd = lerp(bc, cd, t), m = lerp(abc, bcd, t);
  return [[c[0], ab, abc, m], [m, bcd, cd, c[3]]];
};
const rev = (c: Cubic): Cubic => [c[3], c[2], c[1], c[0]];
const C = (c: Cubic) => `C${P(c[1])} ${P(c[2])} ${P(c[3])}`;
const mirrorCubic = (c: Cubic): Cubic => [mx(c[0]), mx(c[1]), mx(c[2]), mx(c[3])];
const dist = (a: Pt, b: Pt) => Math.hypot(a[0] - b[0], a[1] - b[1]);
/** first t where |bez(t) - centre| crosses r (bisection) */
const crossCircle = (c: Cubic, centre: Pt, r: number): number => {
  let lo = 0, hi = 1;
  const outside0 = dist(bez(c, 0), centre) > r;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if ((dist(bez(c, mid), centre) > r) === outside0) lo = mid; else hi = mid;
  }
  return (lo + hi) / 2;
};
/** intersection of two circles: the upper one (smaller y) */
const circleX = (c1: Pt, r1: number, c2: Pt, r2: number): Pt => {
  const d = dist(c1, c2);
  const a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
  const m: Pt = [c1[0] + (a * (c2[0] - c1[0])) / d, c1[1] + (a * (c2[1] - c1[1])) / d];
  const p1: Pt = [m[0] + (h * (c2[1] - c1[1])) / d, m[1] - (h * (c2[0] - c1[0])) / d];
  const p2: Pt = [m[0] - (h * (c2[1] - c1[1])) / d, m[1] + (h * (c2[0] - c1[0])) / d];
  return p1[1] < p2[1] ? p1 : p2;
};

/* ------------------------------------------------------------------ geometry */

const EYE_L: Pt = [540, 513];
const EYE_R: Pt = mx(EYE_L);
const R_IN = 99;
const R_OUT = 124;
const GAP_R = 141.5; // body lines stop on this circle around each eye

// Brow: straight top edge from the tip to the ring, curved underside.
const TIP: Pt = [415, 309];
const TOP_JOIN = onCircle(EYE_L, R_OUT, -58.6);
const BROW_UNDER: Cubic = [TIP, [431.3, 382.9], [467.5, 424.3], [550, 414]];
const CAP_OUT = onCircle(EYE_L, R_OUT, 231.2); // ring end, outer corner
const CAP_IN = onCircle(EYE_L, R_IN, 239.8); // ring end, inner corner

function eyeAndEar(): { eye: string; ear: string } {
  const tx = crossCircle(BROW_UNDER, EYE_L, R_OUT);
  const [outer, inner] = split(BROW_UNDER, tx); // outer: tip → X, inner: X → Q
  const X = inner[0];
  const Q = inner[3];
  const eye =
    `M${P(TOP_JOIN)}A${R_OUT} ${R_OUT} 0 1 1 ${P(CAP_OUT)}` +
    `L${P(CAP_IN)}A${R_IN} ${R_IN} 0 1 0 ${P(Q)}` +
    `${C(rev(inner))}A${R_OUT} ${R_OUT} 0 0 1 ${P(TOP_JOIN)}Z`;
  // The ear reaches down to the inner circle so it overlaps the ring: no
  // anti-aliasing seam where the two shapes meet, and it can twitch freely.
  const joinIn = onCircle(EYE_L, R_IN, -58.6);
  const ear = `M${P(TIP)}L${P(TOP_JOIN)}L${P(joinIn)}A${R_IN} ${R_IN} 0 0 0 ${P(Q)}${C(rev(BROW_UNDER))}Z`;
  void X;
  return { eye, ear };
}

/** mirror an absolute path made of M/L/C/A/Z commands about the axis */
function mirrorPath(d: string): string {
  return d.replace(/([MLCAZ])([^MLCAZ]*)/g, (_, cmd: string, args: string) => {
    const n = args.trim().split(/[\s,]+/).filter(Boolean).map(Number);
    if (cmd === 'A') {
      // rx ry rot large sweep x y  → flip sweep and x
      const [rx, ry, rot, large, sweep, x, y] = n;
      return `A${rx} ${ry} ${rot} ${large} ${sweep ? 0 : 1} ${f(2 * AX - x)} ${f(y)}`;
    }
    const out: string[] = [];
    for (let i = 0; i < n.length; i += 2) out.push(`${f(2 * AX - n[i])} ${f(n[i + 1])}`);
    return cmd + out.join(' ');
  });
}

function gear(c: Pt): string {
  const teeth = 8, rTip = 65, rRoot = 52, tipHalf = 8.8, baseHalf = 17.6;
  let d = '';
  for (let i = 0; i < teeth; i++) {
    const a = -90 + (360 / teeth) * i;
    const p1 = onCircle(c, rRoot, a - baseHalf);
    const p2 = onCircle(c, rTip, a - tipHalf);
    const p3 = onCircle(c, rTip, a + tipHalf);
    const p4 = onCircle(c, rRoot, a + baseHalf);
    const next = onCircle(c, rRoot, a + 360 / teeth - baseHalf);
    d += `${i === 0 ? 'M' : 'L'}${P(p1)}L${P(p2)}A${rTip} ${rTip} 0 0 1 ${P(p3)}L${P(p4)}A${rRoot} ${rRoot} 0 0 1 ${P(next)}`;
  }
  d += 'Z';
  // the hole (counter-wound, evenodd)
  const rh = 32;
  d += `M${f(c[0] + rh)} ${f(c[1])}A${rh} ${rh} 0 1 0 ${f(c[0] - rh)} ${f(c[1])}A${rh} ${rh} 0 1 0 ${f(c[0] + rh)} ${f(c[1])}Z`;
  return d;
}

function target(c: Pt): { ring: string; bar: string } {
  const ro = 51.5, ri = 31, half = 22.25;
  const xo = Math.sqrt(ro * ro - half * half), xi = Math.sqrt(ri * ri - half * half);
  const ring =
    `M${P([c[0] + xo, c[1] - half])}A${ro} ${ro} 0 1 0 ${P([c[0] + xo, c[1] + half])}` +
    `L${P([c[0] + xi, c[1] + half])}A${ri} ${ri} 0 1 1 ${P([c[0] + xi, c[1] - half])}Z`;
  const bar = `M${f(c[0] + 25.5)} ${f(c[1] - 10.5)}H${f(EYE_R[0] + R_IN + 4)}V${f(c[1] + 10.5)}H${f(c[0] + 25.5)}Z`;
  return { ring, bar };
}

function crown(): string {
  const topC: Pt = [AX, 495.6], topR = 147.6, rc = 140.5;
  const left = circleX(topC, topR, EYE_L, rc);
  const right = mx(left);
  const v: Pt = [AX, EYE_L[1] - Math.sqrt(rc * rc - (AX - EYE_L[0]) ** 2)];
  return `M${P(left)}A${topR} ${topR} 0 0 1 ${P(right)}A${rc} ${rc} 0 0 0 ${P(v)}A${rc} ${rc} 0 0 0 ${P(left)}Z`;
}

function body(): { belly: string; back: string } {
  const outerL: Cubic = [[422, 593], [402.2, 705.3], [431.9, 800.6], [514, 878]];
  const outerR: Cubic = [[557, 878], [672.7, 861.9], [759.6, 767.5], [760, 648]];
  const innerR: Cubic = [[741, 639], [738.4, 761.9], [652.2, 850.7], [531, 862]];
  const innerL: Cubic = [[531, 862], [460.8, 795.7], [427.9, 715], [442, 617]];
  const belly =
    `M${P(outerL[0])}${C(outerL)}L${P(outerR[0])}${C(outerR)}` +
    `A${GAP_R} ${GAP_R} 0 0 1 ${P(innerR[0])}${C(innerR)}${C(innerL)}` +
    `A${GAP_R} ${GAP_R} 0 0 1 ${P(outerL[0])}Z`;
  const bOut: Cubic = [[919, 593], [938.1, 706.6], [909.1, 800], [827, 878]];
  const bIn: Cubic = [[794, 878], [872.6, 806.2], [914.1, 727.6], [899, 617]];
  const back = `M${P(bOut[0])}${C(bOut)}L${P(bIn[0])}${C(bIn)}A${GAP_R} ${GAP_R} 0 0 0 ${P(bOut[0])}Z`;
  return { belly, back };
}

function wings(): string {
  const outer: Cubic = [[401, 667], [356.8, 725.1], [342.8, 800.9], [344, 878]];
  const inner: Cubic = [[490, 878], [427.3, 819.8], [400.5, 746.5], [401, 667]];
  const l = `M${P(outer[0])}${C(outer)}L${P(inner[0])}${C(inner)}Z`;
  const ro = mirrorCubic(outer), ri = mirrorCubic(inner);
  const r = `M${P(ro[0])}${C(ro)}L${P(ri[0])}${C(ri)}Z`;
  return `<path class="wing wing-l" d="${l}"/><path class="wing wing-r" d="${r}"/>`;
}

function perch(): string {
  const y = 922, h = 20, rO = 31.5, rI = 13.5;
  const cl: Pt = [303.5, y], cr = mx(cl);
  const ring = (c: Pt) =>
    `M${f(c[0] + rO)} ${y}A${rO} ${rO} 0 1 0 ${f(c[0] - rO)} ${y}A${rO} ${rO} 0 1 0 ${f(c[0] + rO)} ${y}Z` +
    `M${f(c[0] + rI)} ${y}A${rI} ${rI} 0 1 1 ${f(c[0] - rI)} ${y}A${rI} ${rI} 0 1 1 ${f(c[0] + rI)} ${y}Z`;
  const trace = `M${f(cl[0] + rO - 2)} ${y - h / 2}H${f(cr[0] - rO + 2)}V${y + h / 2}H${f(cl[0] + rO - 2)}Z`;
  const pillXs = [577, 609];
  const pills = [...pillXs, ...pillXs.map((x) => 2 * AX - x - 27)]
    .sort((a, b) => a - b)
    .map((x, i) => `<rect class="pad pad-${i + 1}" x="${x}" y="890" width="27" height="64" rx="12"/>`)
    .join('');
  return (
    `<path class="trace" d="${trace}"/>` +
    `<path class="via via-l" fill-rule="evenodd" d="${ring(cl)}"/>` +
    `<path class="via via-r" fill-rule="evenodd" d="${ring(cr)}"/>` +
    pills
  );
}

/* ---------------------------------------------------------------- assembly */

const { eye: EYE_L_D, ear: EAR_L_D } = eyeAndEar();
const EYE_R_D = mirrorPath(EYE_L_D);
const EAR_R_D = mirrorPath(EAR_L_D);
const GEAR_C: Pt = [539.5, 513.5];
const PUPIL_C: Pt = mx(GEAR_C);
const TGT = target(PUPIL_C);
const BODY = body();

/** Inner markup of the owl (no <svg> wrapper), in source coordinates. */
export const OWL_GROUPS = [
  `<g id="ears" class="owl-ears"><path class="ear ear-l" d="${EAR_L_D}"/><path class="ear ear-r" d="${EAR_R_D}"/></g>`,
  `<g id="crown" class="owl-crown"><path d="${crown()}"/></g>`,
  `<g id="eye-gear" class="owl-eye-gear"><path class="ring" d="${EYE_L_D}"/>` +
    `<g class="gear"><path fill-rule="evenodd" d="${gear(GEAR_C)}"/><circle class="axle" cx="${GEAR_C[0]}" cy="${GEAR_C[1]}" r="15.5"/></g></g>`,
  `<g id="eye-target" class="owl-eye-target"><path class="ring" d="${EYE_R_D}"/>` +
    `<path class="reticle" d="${TGT.ring}"/><path class="beam" d="${TGT.bar}"/>` +
    `<circle class="pupil" cx="${PUPIL_C[0]}" cy="${PUPIL_C[1]}" r="15.5"/></g>`,
  `<g id="beak" class="owl-beak"><path d="M672 568L648.5 605.5L672 643L695.5 605.5Z"/></g>`,
  `<g id="body" class="owl-body"><path class="belly" d="${BODY.belly}"/><path class="back" d="${BODY.back}"/></g>`,
  `<g id="wings" class="owl-wings">${wings()}</g>`,
  `<g id="perch" class="owl-perch">${perch()}</g>`,
].join('');

export const OWL_FRAME = `<g id="frame" class="owl-frame"><rect x="179.5" y="105" width="984" height="984" rx="150" fill="none" stroke-width="26.5"/></g>`;

/** View boxes, in source coordinates. */
export const VIEWBOX = {
  mark: '258 296 828 668', // owl + perch only
  icon: '152 78 1039 1039', // owl inside its rounded frame
  lockup: '150 76 1086 1330', // frame + wordmark
  source: '0 0 1386 1476',
} as const;

/** Centres useful to animate from JS (in source coordinates). */
export const OWL_POINTS = {
  gear: GEAR_C,
  pupil: PUPIL_C,
  eyeL: EYE_L,
  eyeR: EYE_R,
  axis: AX,
  perchY: 922,
} as const;

export interface OwlOptions {
  /** which framing to use */
  view?: keyof typeof VIEWBOX;
  /** draw the rounded square around the owl */
  frame?: boolean;
  /** include the "OwlWorks" wordmark (needs view: 'lockup' or 'source') */
  wordmark?: string;
  /** accessible name; omit (or decorative: true) to hide from AT */
  title?: string;
  decorative?: boolean;
  className?: string;
  id?: string;
  /** extra attributes, e.g. 'style="--owl-ink:#fff"' */
  attrs?: string;
}

/**
 * The full SVG as a string. Default colours: navy lines, orange accents.
 * Style hooks: .owl-* group classes, CSS vars --owl-ink / --owl-accent.
 */
export function owlSVG(o: OwlOptions = {}): string {
  const view = o.view ?? (o.frame ? 'icon' : 'mark');
  const a11y = o.decorative || !o.title ? 'aria-hidden="true" focusable="false"' : `role="img" aria-labelledby="${o.id ?? 'owl'}-t"`;
  const title = o.title && !o.decorative ? `<title id="${o.id ?? 'owl'}-t">${o.title}</title>` : '';
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VIEWBOX[view]}" class="owl ${o.className ?? ''}"` +
    `${o.id ? ` id="${o.id}"` : ''} ${a11y} ${o.attrs ?? ''}>` +
    title +
    `<g class="owl-ink" fill="var(--owl-ink, #011F2A)" stroke="var(--owl-ink, #011F2A)" stroke-width="0">` +
    OWL_GROUPS.replace(`<g id="wings" class="owl-wings">`, `<g id="wings" class="owl-wings" fill="var(--owl-accent, #FF6A13)">`).replace(
      `<circle class="pupil"`,
      `<circle class="pupil" fill="var(--owl-accent, #FF6A13)"`,
    ) +
    (o.frame ? OWL_FRAME : '') +
    (o.wordmark ?? '') +
    `</g></svg>`
  );
}

/**
 * Same markup but with group ids prefixed, for pages that inline several owls
 * (ids must stay unique in a document). The first owl on a page keeps the
 * canonical ids (#ears, #eye-gear…); pass a prefix for the others.
 */
export function owlSVGPrefixed(prefix: string, o: OwlOptions = {}): string {
  return owlSVG(o).replace(/ id="([a-z-]+)"/g, (_m, id) => ` id="${prefix}-${id}"`).replace(/aria-labelledby="([^"]+)"/, `aria-labelledby="${prefix}-$1"`);
}
