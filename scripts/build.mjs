// Builds the site into dist/ — a complete static site for https://owlworks.dev:
// index.html, legal pages, 404, CNAME, robots.txt, sitemap.xml, icons, og-image,
// app-ads.txt and the Tiny Legion live showcase (public/tiny-legion/).
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';

try {
  execFileSync('node', ['scripts/github.mjs'], { stdio: 'inherit' });
} catch {
  console.warn('github: fetch failed, keeping the last data');
}

execFileSync('npx', ['vite', 'build', '--logLevel', 'warn'], { stdio: 'inherit' });
const out = 'dist';
const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));

// .dev is HSTS-preloaded: no resource may be fetched over http://
const files = walk(out).filter((f) => /\.(html|css|js|svg|json|webmanifest)$/.test(f));
const insecure = files.flatMap((f) =>
  [...readFileSync(f, 'utf8').matchAll(/(?:src|href|url\()=?["']?(http:\/\/[^"')\s]+)/g)].map((m) => `${relative(out, f)}: ${m[1]}`),
);
if (insecure.length) {
  console.error('✗ http:// resources found:\n  ' + insecure.join('\n  '));
  process.exitCode = 1;
}

// initial JS budget (entry chunks referenced by index.html)
const html = readFileSync(join(out, 'index.html'), 'utf8');
const entries = [...html.matchAll(/<script[^>]+src="\/([^"]+\.js)"/g), ...html.matchAll(/<link[^>]+rel="modulepreload"[^>]+href="\/([^"]+\.js)"/g)].map((m) => m[1]);
const gz = entries.reduce((n, f) => n + gzipSync(readFileSync(join(out, f))).length, 0);
const css = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="\/([^"]+\.css)"/g)].reduce((n, m) => n + gzipSync(readFileSync(join(out, m[1]))).length, 0);
console.log(`initial JS ${(gz / 1024).toFixed(1)} kB gzip (budget 150) · CSS ${(css / 1024).toFixed(1)} kB gzip`);
if (gz > 150 * 1024) console.warn('⚠ over the initial JS budget');
console.log('✓ dist/ ready to deploy');
