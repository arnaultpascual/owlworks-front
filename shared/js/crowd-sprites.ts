/** Unit sprites for the crowd engine, drawn as blueprint symbols: one per rank (more rings), a cross for an enemy. */
export type CrowdTheme = 'blueprint';

export interface Sprite {
  img: HTMLCanvasElement;
  /** CSS px */
  w: number;
  h: number;
}
export interface SpriteSet {
  ranks: Sprite[];
  enemy: Sprite;
  shadow: string;
  blood: string;
  spark: string;
  accent: string;
}

function drawUnit(g: CanvasRenderingContext2D, s: number, ink: string, rank: number, enemy: boolean) {
  const cx = s * 0.5;
  const cy = s * 0.6;
  g.strokeStyle = ink;
  g.lineWidth = Math.max(1, s * 0.07);
  if (enemy) {
    g.beginPath();
    g.moveTo(cx - s * 0.2, cy - s * 0.2);
    g.lineTo(cx + s * 0.2, cy + s * 0.2);
    g.moveTo(cx + s * 0.2, cy - s * 0.2);
    g.lineTo(cx - s * 0.2, cy + s * 0.2);
    g.stroke();
    return;
  }
  g.beginPath();
  g.arc(cx, cy, s * 0.22, 0, Math.PI * 2);
  g.stroke();
  for (let i = 1; i <= Math.min(rank, 3); i++) {
    g.beginPath();
    g.arc(cx, cy, s * (0.22 + i * 0.09), 0, Math.PI * 2);
    g.stroke();
  }
  g.fillStyle = ink;
  g.beginPath();
  g.arc(cx, cy, s * 0.07, 0, Math.PI * 2);
  g.fill();
}

export function makeSprites(_theme: CrowdTheme, size: number, dpr: number): SpriteSet {
  const mk = (rank: number, enemy: boolean): Sprite => {
    const sCss = size * (1 + rank * 0.32);
    const s = sCss * dpr;
    const c = document.createElement('canvas');
    c.width = c.height = Math.ceil(s);
    drawUnit(c.getContext('2d')!, s, enemy ? '#b4460a' : '#011f2a', rank, enemy);
    return { img: c, w: sCss, h: sCss };
  };
  return {
    ranks: Array.from({ length: 6 }, (_, r) => mk(r, false)),
    enemy: mk(0, true),
    shadow: 'rgba(1,31,42,.06)',
    blood: '#b4460a',
    spark: '#ff6a13',
    accent: '#ff6a13',
  };
}
