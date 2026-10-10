// Lighthouse (mobile, simulated 4G + 4× CPU slowdown) on the built site.
//   npm run build && npm run lighthouse
// Output: review/lighthouse-home.html + review/lighthouse.json (scores, LCP, TBT, CLS, transfer)
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import { chromium } from 'playwright';
import { preview } from 'vite';
import { existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const proposals = existsSync(join('dist', 'index.html')) ? ['site'] : [];
const chrome = await chromeLauncher.launch({ chromePath: chromium.executablePath(), chromeFlags: ['--headless=new', '--no-sandbox'] });
const results = {};

for (const [i, name] of proposals.entries()) {
  const port = 4400 + i;
  const server = await preview({ root: process.cwd(), configFile: false, preview: { port, strictPort: true, open: false }, build: { outDir: 'dist' }, logLevel: 'silent' });
  const runs = [];
  for (const [label, url] of [['home', `http://localhost:${port}/`]]) {
    const r = await lighthouse(url, { port: chrome.port, output: 'html', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] });
    mkdirSync('review', { recursive: true });
    writeFileSync(join('review', `lighthouse-${label}.html`), r.report);
    const pick = (id) => (r.lhr.audits[id]?.details?.items ?? []).map((it) => ({ node: it.node?.snippet ?? it.node?.selector ?? '', label: it.node?.nodeLabel ?? '', score: it.score, extra: it.subItems?.items?.map((s) => s.node?.snippet ?? s.extra ?? '').slice(0, 3) }));
    writeFileSync(join('review', `lighthouse-${label}-issues.json`), JSON.stringify({ cls: pick('layout-shifts'), contrast: pick('color-contrast'), label: pick('label-content-name-mismatch'), lcp: pick('largest-contentful-paint-element') }, null, 2));
    const a = r.lhr.audits;
    runs.push({
      page: label,
      performance: Math.round(r.lhr.categories.performance.score * 100),
      accessibility: Math.round(r.lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(r.lhr.categories['best-practices'].score * 100),
      seo: Math.round(r.lhr.categories.seo.score * 100),
      LCP: a['largest-contentful-paint'].displayValue,
      FCP: a['first-contentful-paint'].displayValue,
      TBT: a['total-blocking-time'].displayValue,
      CLS: a['cumulative-layout-shift'].displayValue,
      transfer: a['total-byte-weight'].displayValue,
      failedA11y: Object.values(a)
        .filter((x) => x.score === 0 && r.lhr.categories.accessibility.auditRefs.some((ref) => ref.id === x.id))
        .map((x) => x.id),
    });
  }
  results[name] = runs;
  console.log(name, JSON.stringify(runs));
  await new Promise((r) => server.httpServer.close(r));
}
await chrome.kill();
writeFileSync('review/lighthouse.json', JSON.stringify(results.site ?? results, null, 2) + '\n');
