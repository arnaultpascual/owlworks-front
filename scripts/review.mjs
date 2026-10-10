// Visual review of dist/ with Playwright: screenshots per section (desktop, mobile, reduced motion),
// no-JS check and scroll videos → review/. Flags: --no-video, --video-only.
import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdirSync, readdirSync, existsSync, writeFileSync, renameSync, rmSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
if (!existsSync(join('dist', 'index.html'))) {
  console.error('Nothing to review: run `npm run build` first.');
  process.exit(1);
}
const proposals = ['site'];

const SECTIONS = ['top', 'studio', 'tiny-legion', 'readseal', 'thirdwatch', 'open-source', 'contact'];
const VIEWPORTS = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 7a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Mobile Safari/537.36' },
};

const browser = await chromium.launch();
const summary = {};

for (const [i, name] of proposals.entries()) {
  const port = 4300 + i;
  const server = await preview({ root: process.cwd(), configFile: false, preview: { port, strictPort: true, open: false }, build: { outDir: 'dist' }, logLevel: 'silent' });
  const base = `http://localhost:${port}/`;
  const out = 'review';
  if (!flag('video-only')) for (const d of ['desktop', 'mobile', 'desktop-reduced', 'mobile-reduced', 'nojs']) rmSync(join(out, d), { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  const report = { name, errors: [], overflow: {}, missing: [] };
  console.log(`\n▸ ${name} (${base})`);

  const shootSections = async (kind, ctxOpts, reduced = false) => {
    const dir = join(out, reduced ? `${kind}-reduced` : kind);
    mkdirSync(dir, { recursive: true });
    const ctx = await browser.newContext({ ...ctxOpts, reducedMotion: reduced ? 'reduce' : 'no-preference' });
    const page = await ctx.newPage();
    page.on('pageerror', (e) => report.errors.push(`${kind}${reduced ? '/rm' : ''} pageerror: ${e.message}`));
    page.on('console', (m) => m.type() === 'error' && report.errors.push(`${kind}${reduced ? '/rm' : ''} console: ${m.text()}`));
    await page.goto(base, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1800);
    for (const [n, id] of SECTIONS.entries()) {
      const y = await page.evaluate((id) => {
        const el = id === 'top' ? document.getElementById('top') ?? document.body : document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : null;
      }, id);
      if (y === null) {
        report.missing.push(id);
        continue;
      }
      // approach the section progressively so scroll-driven scenes play
      const from = await page.evaluate(() => window.scrollY);
      const steps = Math.max(1, Math.round(Math.abs(y - from) / 400));
      for (let s = 1; s <= steps; s++) {
        await page.evaluate((v) => window.scrollTo(0, v), from + ((y - from) * s) / steps);
        await page.waitForTimeout(60);
      }
      await page.waitForTimeout(1400);
      await page.screenshot({ path: join(dir, `${String(n).padStart(2, '0')}-${id}.png`) });
    }
    // footer
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(1200);
    await page.screenshot({ path: join(dir, `99-footer.png`) });
    report.overflow[`${kind}${reduced ? '-reduced' : ''}`] = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (!reduced) {
      await page.screenshot({ path: join(dir, `full.png`), fullPage: true }).catch(() => {});
    }
    await ctx.close();
  };

  const videoOnly = flag('video-only');
  if (!videoOnly) for (const [kind, opts] of Object.entries(VIEWPORTS)) {
    await shootSections(kind, opts);
    await shootSections(kind, opts, true);
  }

  if (!videoOnly) {
  // no-JS: is every section there and does it have text?
  {
    const ctx = await browser.newContext({ ...VIEWPORTS.desktop, javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto(base, { waitUntil: 'load' });
    await page.waitForTimeout(500);
    report.nojs = await page.evaluate((ids) => {
      const res = {};
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) {
          res[id] = 'missing';
          continue;
        }
        const s = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        res[id] = { visible: s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05 && r.height > 0, chars: el.innerText.trim().length };
      }
      return res;
    }, SECTIONS);
    mkdirSync(join(out, 'nojs'), { recursive: true });
    await page.screenshot({ path: join(out, 'nojs', 'full.png'), fullPage: true }).catch(() => {});
    await ctx.close();
  }
  }

  // scroll videos
  if (!flag('no-video')) {
    for (const [kind, opts] of Object.entries(VIEWPORTS)) {
      const vdir = join(out, '.video');
      const ctx = await browser.newContext({ ...opts, recordVideo: { dir: vdir, size: opts.viewport } });
      const page = await ctx.newPage();
      await page.goto(base, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2200);
      const height = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
      // ~45 s total whatever the page length, wheel on desktop (Lenis-friendly)
      const frames = 900;
      let last = 0;
      for (let f = 1; f <= frames; f++) {
        const target = (height * f) / frames;
        if (kind === 'desktop') {
          await page.mouse.move(720 + Math.sin(f / 30) * 380, 450 + Math.cos(f / 47) * 220);
          await page.mouse.wheel(0, target - last);
        } else await page.evaluate((v) => window.scrollTo(0, v), target);
        last = target;
        await page.waitForTimeout(40);
      }
      await page.waitForTimeout(1500);
      const video = page.video();
      await ctx.close();
      const file = await video.path();
      // Playwright records large VP8 files: re-encode to a light H.264 MP4 for the review folder
      try {
        execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', file, '-c:v', 'libx264', '-crf', '30', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', join(out, `scroll-${kind}.mp4`)]);
      } catch {
        renameSync(file, join(out, `scroll-${kind}.webm`));
      }
      rmSync(vdir, { recursive: true, force: true });
    }
  }

  if (!videoOnly) writeFileSync(join(out, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  summary[name] = { errors: report.errors.length, missing: report.missing, overflow: report.overflow, nojs: report.nojs };
  console.log(JSON.stringify(summary[name]));
  await new Promise((r) => server.httpServer.close(r));
}

await browser.close();
console.log('\n✓ review → review/');
