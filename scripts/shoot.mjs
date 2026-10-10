// Quick visual check: one viewport screenshot per section + console errors.
// node scripts/shoot.mjs http://localhost:5173/ review/.wip [--mobile] [--reduced] [--wait=1200] [--full]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const [url, out = 'review/.wip'] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const flag = (n) => process.argv.includes(`--${n}`);
const wait = +(process.argv.find((a) => a.startsWith('--wait='))?.split('=')[1] ?? 1200);
const mobile = flag('mobile');
mkdirSync(out, { recursive: true });
const b = await chromium.launch();
const ctx = await b.newContext({
  viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
  deviceScaleFactor: mobile ? 2 : 1,
  isMobile: mobile,
  hasTouch: mobile,
  reducedMotion: flag('reduced') ? 'reduce' : 'no-preference',
});
const p = await ctx.newPage();
const errors = [];
p.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
p.on('console', (m) => m.type() === 'error' && errors.push('console: ' + m.text()));
await p.goto(url, { waitUntil: 'networkidle' });
await p.waitForTimeout(wait);
const tag = `${mobile ? 'm' : 'd'}${flag('reduced') ? '-rm' : ''}`;
await p.screenshot({ path: `${out}/${tag}-00-top.png` });
const ids = ['studio', 'tiny-legion', 'readseal', 'thirdwatch', 'open-source', 'contact'];
let i = 1;
for (const id of ids) {
  const ok = await p.evaluate((id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'instant' });
    return true;
  }, id);
  if (!ok) { errors.push(`missing #${id}`); continue; }
  await p.waitForTimeout(wait);
  await p.screenshot({ path: `${out}/${tag}-${String(i++).padStart(2, '0')}-${id}.png` });
}
await p.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
await p.waitForTimeout(wait);
await p.screenshot({ path: `${out}/${tag}-99-end.png` });
if (flag('full')) await p.screenshot({ path: `${out}/${tag}-full.png`, fullPage: true });
const overflow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
console.log(JSON.stringify({ url, tag, errors, horizontalOverflow: overflow }, null, 2));
await b.close();
