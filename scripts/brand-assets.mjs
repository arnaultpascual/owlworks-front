// Favicons, icons, Open Graph images and deploy files (CNAME, robots, sitemap…) → public/.
import { chromium } from 'playwright';
import sharp from 'sharp';
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { owlSVG, OWL_GROUPS, VIEWBOX } from '../shared/brand/owl.ts';
import { WORDMARK } from '../shared/brand/wordmark.ts';
import { fr, en, SITE } from '../shared/content.ts';
import { EARLY_JS } from '../shared/render/html.ts';
import { createHash } from 'node:crypto';

const PUB = resolve('public');
mkdirSync(PUB, { recursive: true });
const NIGHT = '#011F2A', CREAM = '#FCF0E8', ORANGE = '#FF6A13';

/** resolve the CSS variables so non-browser renderers get plain colours */
const solid = (svg, ink, accent) => svg.replaceAll('var(--owl-ink, #011F2A)', ink).replaceAll('var(--owl-accent, #FF6A13)', accent);

// ---- favicon.svg: the light version of the logo, navy owl on a cream tile framed in navy
// (the frame keeps the tile visible on a light tab bar). The owl fills the tile: at 16 px
// every pixel counts.
const tileOwl = (ink, accent, bg, frame = ink) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">` +
  `<rect x="1.5" y="1.5" width="61" height="61" rx="13" fill="${bg}" stroke="${frame}" stroke-width="3"/>` +
  // heavier lines than the logo (stroke on top of the fills), so the owl still reads at 16 px
  `<svg x="4.5" y="7" width="55" height="50" viewBox="${VIEWBOX.mark}"><g fill="${ink}" stroke="${ink}" stroke-width="16" stroke-linejoin="round">` +
  solid(OWL_GROUPS, ink, accent)
    .replace('<g id="wings" class="owl-wings">', `<g id="wings" class="owl-wings" fill="${accent}" stroke="${accent}">`)
    .replace('<circle class="pupil"', `<circle class="pupil" fill="${accent}" stroke="${accent}"`) +
  `</g></svg></svg>`;
writeFileSync(`${PUB}/favicon.svg`, tileOwl(NIGHT, ORANGE, CREAM));

// ---- raster icons
const png = async (svg, size, file) => sharp(Buffer.from(svg), { density: 300 }).resize(size, size).png({ compressionLevel: 9 }).toFile(file);
const iconSvg = (pad = 0.14, bg = CREAM) => {
  const s = 1000, p = s * pad;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}"><rect width="${s}" height="${s}" fill="${bg}"/>` +
    `<svg x="${p}" y="${p}" width="${s - 2 * p}" height="${s - 2 * p}" viewBox="${VIEWBOX.mark}" preserveAspectRatio="xMidYMid meet">` +
    solid(OWL_GROUPS, NIGHT, ORANGE).replace('<g id="wings" class="owl-wings">', `<g id="wings" class="owl-wings" fill="${ORANGE}">`).replace('<circle class="pupil"', `<circle class="pupil" fill="${ORANGE}"`).replace(/^/, `<g fill="${NIGHT}">`) + `</g></svg></svg>`;
};
await png(iconSvg(0.12), 180, `${PUB}/apple-touch-icon.png`);
await png(iconSvg(0.16), 192, `${PUB}/icon-192.png`);
await png(iconSvg(0.16), 512, `${PUB}/icon-512.png`);
await png(iconSvg(0.22), 512, `${PUB}/icon-maskable-512.png`);
// favicon.ico (PNG-in-ICO, 32×32)
const ico32 = await sharp(Buffer.from(tileOwl(NIGHT, ORANGE, CREAM)), { density: 300 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12); header.writeUInt32LE(ico32.length, 14); header.writeUInt32LE(22, 18);
writeFileSync(`${PUB}/favicon.ico`, Buffer.concat([header, ico32]));

// ---- standalone logo files (for press / stores)
mkdirSync(`${PUB}/brand`, { recursive: true });
writeFileSync(`${PUB}/brand/owlworks-mark.svg`, solid(owlSVG({ view: 'mark', title: 'OwlWorks' }), NIGHT, ORANGE));
writeFileSync(`${PUB}/brand/owlworks-icon.svg`, solid(owlSVG({ view: 'icon', frame: true, title: 'OwlWorks' }), NIGHT, ORANGE));
writeFileSync(`${PUB}/brand/owlworks-lockup.svg`, solid(owlSVG({ view: 'lockup', frame: true, wordmark: WORDMARK, title: 'OwlWorks' }), NIGHT, ORANGE));
writeFileSync(`${PUB}/brand/owlworks-lockup-night.svg`, solid(owlSVG({ view: 'lockup', frame: true, wordmark: WORDMARK, title: 'OwlWorks' }), CREAM, ORANGE));

// ---- Open Graph image, 1200×630, rendered with the real fonts
const font = (f) => 'data:font/woff2;base64,' + readFileSync(resolve('shared/fonts', f)).toString('base64');
const ogHtml = (L, kicker, line) => `<!doctype html><html lang="${L.locale}"><head><style>
@font-face{font-family:Oxanium;src:url(${font('oxanium-var.woff2')});font-weight:200 800}
@font-face{font-family:Saira;src:url(${font('saira-text.woff2')});font-weight:300 700}
@font-face{font-family:JBM;src:url(${font('jetbrains-mono-var.woff2')});font-weight:100 800}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:${NIGHT};color:${CREAM};font-family:Saira;position:relative;overflow:hidden}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(252,240,232,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(252,240,232,.05) 1px,transparent 1px);background-size:40px 40px}
.glow{position:absolute;width:900px;height:900px;left:-260px;top:-190px;background:radial-gradient(circle,rgba(255,106,19,.20),transparent 60%)}
.owl{position:absolute;left:64px;top:92px;width:470px;--owl-ink:${CREAM};--owl-accent:${ORANGE}}
.txt{position:absolute;left:590px;top:120px;width:560px}
.k{font:500 20px/1 JBM;letter-spacing:.08em;text-transform:uppercase;color:${ORANGE}}
h1{font:600 76px/0.98 Oxanium;letter-spacing:-.02em;margin:22px 0 26px}
p{font:400 25px/1.4 Saira;color:#cfdbe0}
.url{position:absolute;left:590px;bottom:64px;font:500 22px/1 JBM;color:${CREAM}}
.url b{color:${ORANGE};font-weight:500}
</style></head><body><div class="grid"></div><div class="glow"></div>
${owlSVG({ view: 'mark', decorative: true, className: 'owl' })}
<div class="txt"><div class="k">${kicker}</div><h1>${L.hero.title}</h1><p>${line}</p></div>
<div class="url"><b>→</b> owlworks.dev${L.locale === 'en' ? '/en' : ''}</div></body></html>`;
const b = await chromium.launch();
for (const [L, file, kicker, line] of [
  [fr, 'og-image.png', 'OwlWorks · studio indépendant', 'SaaS, apps mobiles et outils pour développeurs. Et de l’open source.'],
  [en, 'og-image-en.png', 'OwlWorks · independent studio', 'SaaS, mobile apps and developer tools. And open source.'],
]) {
  writeFileSync(resolve('review/.og.html'), ogHtml(L, kicker, line));
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto('file://' + resolve('review/.og.html'));
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${PUB}/${file}` });
  await p.close();
  const png = await sharp(`${PUB}/${file}`).png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer();
  writeFileSync(`${PUB}/${file}`, png);
}
await b.close();
(await import('node:fs')).rmSync(resolve('review/.og.html'));

// ---- deploy files
writeFileSync(`${PUB}/CNAME`, 'owlworks.dev\n');
writeFileSync(`${PUB}/.nojekyll`, '');
writeFileSync(`${PUB}/robots.txt`, `User-agent: *\nAllow: /\nDisallow: /tiny-legion/\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
const today = new Date().toISOString().slice(0, 10);
const pages = ['home', 'legal', 'tinyLegionPrivacy'];
const urls = pages.flatMap((page) =>
  [fr, en].map((L) => {
    const alt = [fr, en].map((A) => `    <xhtml:link rel="alternate" hreflang="${A.locale}" href="${SITE.url}${A.paths[page]}"/>`).join('\n');
    return `  <url>\n    <loc>${SITE.url}${L.paths[page]}</loc>\n    <lastmod>${today}</lastmod>\n${alt}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}${fr.paths[page]}"/>\n  </url>`;
  }),
);
writeFileSync(
  `${PUB}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`,
);
writeFileSync(
  `${PUB}/site.webmanifest`,
  JSON.stringify(
    {
      name: 'OwlWorks',
      short_name: 'OwlWorks',
      description: 'Studio indépendant : SaaS, apps mobiles, outils pour développeurs.',
      start_url: '/',
      display: 'browser',
      background_color: CREAM,
      theme_color: NIGHT,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      ],
    },
    null,
    2,
  ) + '\n',
);
// AdMob asks for /app-ads.txt on the developer site (see store/README.md in the game repo).
writeFileSync(
  `${PUB}/app-ads.txt`,
  '# app-ads.txt for owlworks.dev\n# TODO: paste the line AdMob gives you (AdMob › Apps › app-ads.txt), e.g.\n# google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0\n',
);
// Cloudflare Pages headers (ignored by GitHub Pages, harmless there).
writeFileSync(
  `${PUB}/_headers`,
  `/*\n  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()\n  Content-Security-Policy: default-src 'self'; img-src 'self' data:; media-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'sha256-${createHash('sha256').update(EARLY_JS).digest('base64')}'; font-src 'self'; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; upgrade-insecure-requests\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n`,
);
console.log('brand assets → public/');
