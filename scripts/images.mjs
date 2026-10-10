// Optimised images (assets/ → shared/img, AVIF + WebP) and the Tiny Legion video loops (from the
// game repo's store trailers, TINY_LEGION_REPO). Usage: node scripts/images.mjs [--force]
import sharp from 'sharp';
import { existsSync, mkdirSync, writeFileSync, statSync, readdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, join } from 'node:path';

const force = process.argv.includes('--force');
const OUT = resolve('shared/img');
const VID = resolve('shared/video');
mkdirSync(OUT, { recursive: true });
mkdirSync(VID, { recursive: true });

/**
 * name → { src, widths, crop?: [left, top, width, height] (source px) }
 * ReadSeal screenshots are cropped to the page area: no Confluence or Atlassian logo.
 */
const JOBS = {
  // Tiny Legion — store screenshots and a raw gameplay capture (all from the real game)
  'tl-shot-01-bataille': { src: 'assets/tiny-legion/01-bataille.png', widths: [360, 540, 810] },
  'tl-shot-02-evolution': { src: 'assets/tiny-legion/02-evolution.png', widths: [360, 540, 810] },
  'tl-shot-06-boss': { src: 'assets/tiny-legion/06-boss.png', widths: [360, 540, 810] },
  'tl-shot-07-archipel': { src: 'assets/tiny-legion/07-archipel.png', widths: [360, 540, 810] },
  'tl-raw-battle-horde': { src: 'assets/tiny-legion/battle-horde.png', widths: [360, 540, 810] },
  // the same store screenshots in English (for /en/)
  'tl-shot-01-bataille-en': { src: 'assets/tiny-legion/en/01-bataille.png', widths: [360, 540, 810] },
  'tl-shot-02-evolution-en': { src: 'assets/tiny-legion/en/02-evolution.png', widths: [360, 540, 810] },
  'tl-shot-06-boss-en': { src: 'assets/tiny-legion/en/06-boss.png', widths: [360, 540, 810] },
  'tl-shot-07-archipel-en': { src: 'assets/tiny-legion/en/07-archipel.png', widths: [360, 540, 810] },
  // ReadSeal — cropped marketplace screens
  'rs-confirm': { src: 'assets/readseal/readseal-2-confirm-1840x900.png', widths: [640, 960, 1280], crop: [620, 180, 1190, 350] },
  'rs-register': { src: 'assets/readseal/readseal-3-evidence-1840x900.png', widths: [640, 960, 1280], crop: [630, 150, 980, 470] },
};

const manifest = {};
for (const [name, job] of Object.entries(JOBS)) {
  let base = sharp(job.src);
  const meta = await base.metadata();
  let [w0, h0] = [meta.width, meta.height];
  if (job.crop) {
    const [left, top, width, height] = job.crop;
    base = base.extract({ left, top, width, height });
    [w0, h0] = [width, height];
  }
  const widths = job.widths.filter((w) => w <= w0);
  if (!widths.length) widths.push(w0);
  manifest[name] = { width: w0, height: h0, widths, ratio: +(w0 / h0).toFixed(4) };
  for (const w of widths) {
    for (const fmt of ['avif', 'webp']) {
      const file = `${OUT}/${name}-${w}.${fmt}`;
      if (!force && existsSync(file)) continue;
      const img = base.clone().resize({ width: w, withoutEnlargement: true });
      if (fmt === 'avif') await img.avif({ quality: 52, effort: 6 }).toFile(file);
      else await img.webp({ quality: 74, effort: 6 }).toFile(file);
    }
  }
  const sizes = widths.map((w) => `${w}:${Math.round(statSync(`${OUT}/${name}-${w}.avif`).size / 1024)}k`).join(' ');
  console.log(name.padEnd(22), `${w0}×${h0}`, sizes);
}
writeFileSync(`${OUT}/manifest.json`, JSON.stringify(manifest, null, 2) + '\n');

// remove generated images no job produces any more
const keep = new Set(Object.entries(manifest).flatMap(([n, m]) => m.widths.flatMap((w) => [`${n}-${w}.avif`, `${n}-${w}.webp`])));
for (const f of readdirSync(OUT)) if (/\.(avif|webp)$/.test(f) && !keep.has(f)) rmSync(join(OUT, f));

// Muted gameplay loop (first seconds of the store trailer: the horde, the clash, the fusion)
const repo = process.env.TINY_LEGION_REPO ?? '';
for (const [suffix, lang] of [['', 'fr'], ['-en', 'en']]) {
  const trailer = join(repo, `store/video/tiny-legion-store-${lang}.mp4`);
  const mp4 = `${VID}/tl-loop${suffix}.mp4`;
  const webm = `${VID}/tl-loop${suffix}.webm`;
  const poster = `${VID}/tl-loop${suffix}-poster.webp`;
  if (!existsSync(trailer)) {
    console.log(`tl-loop${suffix}: trailer not found (${trailer}), keeping shared/video as is`);
    continue;
  }
  const cut = ['-v', 'error', '-y', '-ss', '0.4', '-t', '6.6', '-i', trailer, '-an', '-vf', 'scale=432:-2,fps=30'];
  if (force || !existsSync(mp4)) execFileSync('ffmpeg', [...cut, '-c:v', 'libx264', '-profile:v', 'main', '-crf', '33', '-preset', 'veryslow', '-movflags', '+faststart', '-pix_fmt', 'yuv420p', mp4]);
  if (force || !existsSync(webm)) execFileSync('ffmpeg', [...cut, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '50', '-deadline', 'good', '-cpu-used', '1', '-row-mt', '1', webm]);
  if (force || !existsSync(poster)) {
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', '2.2', '-i', trailer, '-frames:v', '1', '-vf', 'scale=432:-2', `${VID}/tl-loop${suffix}-poster.png`]);
    await sharp(`${VID}/tl-loop${suffix}-poster.png`).webp({ quality: 70 }).toFile(poster);
    rmSync(`${VID}/tl-loop${suffix}-poster.png`);
  }
  console.log(`tl-loop${suffix}`, `mp4 ${Math.round(statSync(mp4).size / 1024)}k`, `webm ${Math.round(statSync(webm).size / 1024)}k`);
}
