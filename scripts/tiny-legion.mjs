// Rebuilds the Tiny Legion showcase (public/tiny-legion/, committed) from the game repo:
//   TINY_LEGION_REPO=/path/to/game node scripts/tiny-legion.mjs
import { build } from 'vite';
import { existsSync, readdirSync, statSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { execFileSync } from 'node:child_process';

const repo = process.env.TINY_LEGION_REPO ?? '';
if (!existsSync(join(repo, 'src/game/Game.ts'))) {
  console.error(`Tiny Legion repo not found at ${repo} (set TINY_LEGION_REPO).`);
  process.exit(1);
}
let rev = '';
try {
  rev = execFileSync('git', ['-C', repo, 'log', '-1', '--format=%h %s'], { encoding: 'utf8' }).trim();
} catch {}
await build({ configFile: resolve('tiny-legion-src/vite.config.ts'), logLevel: 'warn', define: { __TL_REV__: JSON.stringify(rev) } });
const out = resolve('public/tiny-legion');
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
let raw = 0, gz = 0;
for (const f of walk(out)) {
  const b = readFileSync(f);
  raw += b.length;
  if (/\.(js|css|html)$/.test(f)) gz += gzipSync(b).length;
  else gz += b.length;
}
console.log(`tiny-legion showcase → public/tiny-legion/ (${(raw / 1024).toFixed(0)} kB, ~${(gz / 1024).toFixed(0)} kB over the wire) · game @ ${rev}`);
