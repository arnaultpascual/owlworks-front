// Renders the SVG owl next to the source PNG and over it (difference blend),
// and measures how well they match (IoU of the inked pixels).
// Usage: node scripts/logo-compare.mjs [out.png] [wordmark.json]
import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { owlSVG } from '../shared/brand/owl.ts';
import { WORDMARK } from '../shared/brand/wordmark.ts';

const out = process.argv[2] ?? 'review/logo-compare.png';
const wmFile = process.argv[3];
let wordmark = WORDMARK;
if (wmFile) {
  const p = JSON.parse(readFileSync(wmFile, 'utf8'));
  wordmark = `<g id="wordmark"><path d="${p.ink}"/><path fill="var(--owl-accent,#FF6A13)" d="${p.accent}"/></g>`;
}
const png = 'data:image/png;base64,' + readFileSync(resolve('assets/owlworks/owlworks-logo-source.png')).toString('base64');
const svg = owlSVG({ view: 'source', frame: true, wordmark, attrs: 'width="1386" height="1476" style="--owl-ink:#091E29;--owl-accent:#ED7333"' });
const html = `<!doctype html><html><body style="margin:0;background:#FCF0E8;display:flex;gap:0">
<div style="position:relative;width:1386px;height:1476px"><img src="${png}" width="1386" height="1476"></div>
<div style="position:relative;width:1386px;height:1476px">${svg}</div>
<div style="position:relative;width:1386px;height:1476px;isolation:isolate"><img src="${png}" width="1386" height="1476" style="position:absolute;inset:0">
<div style="position:absolute;inset:0;mix-blend-mode:difference">${svg}</div></div>
<canvas id=c width=1386 height=1476 style="display:none"></canvas></body></html>`;
writeFileSync('review/.logo-compare.html', html);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1386 * 3, height: 1476 } });
await p.goto('file://' + resolve('review/.logo-compare.html'));
const iou = await p.evaluate(async ({ png, svg }) => {
  const load = (src) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = src; });
  const a = await load(png);
  const s = await load('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg));
  const c = document.getElementById('c'); const g = c.getContext('2d', { willReadFrequently: true });
  const read = (img) => { g.fillStyle = '#FCF0E8'; g.fillRect(0, 0, 1386, 1476); g.drawImage(img, 0, 0, 1386, 1476); return g.getImageData(0, 0, 1386, 1476).data; };
  const A = read(a), B = read(s);
  const ink = (d, i) => d[i] + d[i + 1] + d[i + 2] < 3 * 200;
  const zones = { owl: [250, 290, 1090, 970], wordmark: [180, 1220, 1170, 1395], frame: [150, 76, 1195, 1120] };
  const res = {};
  for (const [k, [x0, y0, x1, y1]] of Object.entries(zones)) {
    let inter = 0, uni = 0;
    for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
      const i = (y * 1386 + x) * 4; const p = ink(A, i), q = ink(B, i);
      if (p && q) inter++; if (p || q) uni++;
    }
    res[k] = +(inter / uni).toFixed(4);
  }
  return res;
}, { png, svg });
await p.screenshot({ path: out });
await b.close();
console.log('IoU', iou, '→', out);
