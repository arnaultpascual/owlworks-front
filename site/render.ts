/** The site's HTML (Le Perchoir), rendered at build time: every section is a component on one trace. */
import type { Project, SiteContent } from '../shared/content.ts';
import { SITE, getContent } from '../shared/content.ts';
import { head, alternatesFor, orgJsonLd, picture, pinnedRepos, mailto, link, markPlaceholders, plain, esc, vendorLink, storeLinks } from '../shared/render/html.ts';
import { owlSVGPrefixed } from '../shared/brand/owl.ts';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { COPY, useCopy } from './copy.ts';
import { planSVG } from './plan.ts';

/* ------------------------------------------------------------- helpers */

const led = (cls = '') => `<span class="led ${cls}" aria-hidden="true"></span>`;
const ref = (r: string, cls = '') => `<span class="ref ${cls}">${r}</span>`;

/** the silkscreen strip on top of every section */
function sheetHead(no: string, name: string, refs: string): string {
  return (
    `<div class="sheet-head" aria-hidden="true">` +
    `<span class="sh-no">${no}</span><span class="sh-name">${name}</span><span class="sh-rule"></span><span class="sh-refs">${refs}</span>` +
    `</div>`
  );
}

function status(c: SiteContent, p: Project): string {
  const tone = c.ui[p.statusTone];
  if (p.stores?.length)
    return `<div class="status status--${p.statusTone}">${led('led--status')}<span class="status-k">${tone}</span>${storeLinks(c, p, 'tl-stores')}</div>`;
  return `<p class="status status--${p.statusTone}">${led('led--status')}<span class="status-k">${tone}</span><span class="status-v">${p.status}</span></p>`;
}

function compTag(r: string, kind: string): string {
  return `<p class="comp-tag">${ref(r)}${led()}<span class="comp-kind">${kind}</span></p>`;
}

function facts(p: Project, cls: string): string {
  return (
    `<dl class="facts ${cls}">` +
    p.facts
      .map(
        (f) =>
          `<div class="fact"><dt class="fact-v">${f.value}</dt><dd class="fact-l">${f.label}${f.detail ? `<span class="fact-d">${f.detail}</span>` : ''}</dd></div>`,
      )
      .join('') +
    `</dl>`
  );
}

/** decorative pin row (a chip's leads) */
const pins = (n: number, cls = '') => `<span class="pins ${cls}" aria-hidden="true">${'<i></i>'.repeat(n)}</span>`;

const readsealLogo = (() => {
  try {
    const raw = readFileSync(fileURLToPath(new URL('../assets/readseal/readseal-logo.svg', import.meta.url)), 'utf8');
    return raw
      .replace(/<title>.*?<\/title>/s, '')
      .replace(/<!--.*?-->/gs, '')
      .replace(/\s*\n\s*/g, ' ')
      .replace('<svg ', '<svg class="rs-logo" aria-hidden="true" focusable="false" ')
      .replace(/ width="96" height="96"/, '');
  } catch {
    return '';
  }
})();

const zoneLetters = (n: number) =>
  Array.from({ length: n }, (_, i) => (i < 26 ? String.fromCharCode(65 + i) : String.fromCharCode(65 + Math.floor(i / 26) - 1) + String.fromCharCode(65 + (i % 26))));

/* ------------------------------------------------------------- sections */

function header(c: SiteContent): string {
  const navItems = c.nav
    .map((l, i) => `<li><a href="${l.href}"><span class="ref nav-ref" aria-hidden="true">${COPY.nav.refs[i] ?? ''}</span><span class="nav-l">${l.label}</span></a></li>`)
    .join('');
  return `
  <header class="hdr">
    <a class="hdr-logo" href="#top" aria-label="${c.a11y.logo}">${owlSVGPrefixed('logo', { decorative: true, className: 'hdr-owl' })}<span class="hdr-word" aria-hidden="true">Owl<span>W</span>orks</span></a>
    <a class="tool hdr-lang" href="${getContent(c.other.locale).paths.home}" hreflang="${c.other.locale}" lang="${c.other.locale}" aria-label="${c.other.switchTo}">${c.other.short}</a>
    <button class="hdr-menu" type="button" aria-expanded="false" aria-controls="hdr-panel"><span class="hdr-menu-l" data-open="${c.a11y.menu}" data-close="${c.a11y.close}">${c.a11y.menu}</span><span class="hdr-menu-i" aria-hidden="true"><i></i><i></i></span></button>
    <div class="hdr-panel" id="hdr-panel">
      <nav class="hdr-nav" aria-label="${COPY.nav.label}"><ul role="list">${navItems}</ul></nav>
      <div class="hdr-tools">
        <button class="tool tool--cyan" type="button" aria-pressed="false" aria-label="${COPY.a11y.cyanOff}" data-on="${COPY.a11y.cyanOn}" data-off="${COPY.a11y.cyanOff}"><kbd aria-hidden="true">${COPY.tools.cyanKey}</kbd><span aria-hidden="true">${COPY.tools.cyan}</span></button>
      </div>
    </div>
  </header>`;
}

function hero(c: SiteContent): string {
  const h = c.hero;
  const beats = h.beats.map((b) => `<span class="ln">${b.replace(h.mark, `<span class="oe">${h.mark}</span>`)}</span>`).join(' ');
  const skills = h.skills.map((s, i) => `<li><span class="pin-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${s}</li>`).join('');
  const tb = COPY.hero.titleBlock.map((r) => `<div class="tb-c"><dt>${r.k}</dt><dd>${r.v}</dd></div>`).join('');
  return `
  <section id="top" class="hero" aria-labelledby="hero-title">
    <div class="hero-grid">
      <p class="hero-eyebrow">${ref(COPY.hero.plate)}<span>${h.eyebrow}</span></p>
      <h1 id="hero-title" class="hero-title">${beats}</h1>
      <p class="hero-lede">${h.lede}</p>
      <div class="hero-skills">
        <p class="mono-label" aria-hidden="true">${COPY.hero.skillsLabel}</p>
        <ul role="list" class="skills">${skills}</ul>
      </div>
      <figure class="hero-plan">
        ${planSVG()}
        <figcaption class="fig">${COPY.hero.fig}</figcaption>
      </figure>
      <div class="hero-tb">
        <dl class="tb">${tb}</dl>
        <p class="tb-state">${led('led--on')}<span class="tb-k">${COPY.hero.stateLabel}</span><span class="tb-v">${h.watch}</span></p>
      </div>
      <p class="hero-hint"><span class="hint-arrow" aria-hidden="true"></span>${h.scrollHint}</p>
    </div>
  </section>`;
}

function studio(c: SiteContent): string {
  const s = c.studio;
  const B = COPY.studio.bom;
  const ch = COPY.studio.chip;
  const rows = s.offers
    .map(
      (o, i) =>
        `<tr role="row"><td role="cell" class="bom-ref">${B.refs[i]}</td><th role="rowheader" scope="row" class="bom-name">${o.title}</th><td role="cell" class="bom-val">${B.values[i]}</td><td role="cell" class="bom-note">${o.text}</td></tr>`,
    )
    .join('');
  const cols = B.columns.map((col, i) => `<th role="columnheader" scope="col" class="bom-h bom-h-${i}">${col}</th>`).join('');
  const langPins = s.languages
    .map((l, i) => `<li class="u0-pin"><span class="u0-n" aria-hidden="true">${i + 1}</span><span class="u0-l">${l}</span>${led('led--pin')}</li>`)
    .join('');
  return `
  <section id="studio" class="sec studio" aria-labelledby="studio-title">
    ${sheetHead('02', COPY.studio.sheet, `${B.refs[0]}–${B.refs[3]} · ${ch.ref}`)}
    <div class="studio-grid">
      <div class="studio-copy">
        <h2 id="studio-title" class="h2">${s.title}</h2>
        <p class="studio-text">${s.text}</p>
      </div>
      <div class="u0" data-comp="u0">
        <div class="u0-body">
          <span class="u0-notch" aria-hidden="true"></span>
          <p class="u0-head" aria-hidden="true">${ref(ch.ref)}${led()}</p>
          <p class="u0-name" aria-hidden="true">${ch.name}</p>
          <p class="u0-sub" aria-hidden="true">${ch.sub}</p>
          <p class="mono-label u0-label">${ch.pinsLabel}</p>
          <ul class="u0-pins" role="list">${langPins}</ul>
          <span class="u0-vcc" aria-hidden="true">${ch.vcc}</span>
        </div>
        <span class="pin-anchor pin-anchor--r" data-pin aria-hidden="true"></span>
      </div>
    </div>
    <div class="bom-wrap">
      <table class="bom" role="table">
        <caption>${B.caption}</caption>
        <thead role="rowgroup"><tr role="row">${cols}</tr></thead>
        <tbody role="rowgroup">${rows}</tbody>
        <tfoot role="rowgroup"><tr role="row"><td role="cell" colspan="2" class="bom-foot-k">${B.footer}</td><td role="cell" colspan="2" class="bom-foot-v">${B.supplier}</td></tr></tfoot>
      </table>
    </div>
  </section>`;
}

function intro(c: SiteContent): string {
  const p = c.projectsIntro;
  return `
  <section class="sec intro" aria-labelledby="intro-title">
    ${sheetHead('03', COPY.intro.sheet, COPY.intro.refs)}
    <p class="kicker">${p.kicker}</p>
    <h2 id="intro-title" class="h2 intro-title">${p.title}</h2>
    ${p.text ? `<p class="intro-text">${p.text}</p>` : ''}
  </section>`;
}

function tinyLegion(c: SiteContent): string {
  /** English screenshots and video on /en/ (the store visuals carry text) */
  const en = c.locale === 'en' ? '-en' : '';
  const p = c.projects.tinyLegion;
  const x = c.tinyLegionExtras;
  const T = COPY.tl;
  const feats = p.features.map((f) => `<li><h3 class="feat-t">${f.title}</h3><p>${f.text}</p></li>`).join('');
  const list = (a: string[]) => `<ul role="list" class="chips">${a.map((s) => `<li>${s}</li>`).join('')}</ul>`;
  const modes = x.modes.map((m) => `<li><strong>${m.title}</strong> ${m.text}</li>`).join('');
  const shots = (
    [
      [`tl-shot-01-bataille${en}`, '01-bataille'],
      [`tl-shot-02-evolution${en}`, '02-evolution'],
      [`tl-shot-06-boss${en}`, '06-boss'],
      [`tl-shot-07-archipel${en}`, '07-archipel'],
    ] as const
  )
    .map(
      ([name, key], i) =>
        `<figure class="photo photo--${i + 1}"><span class="tape" aria-hidden="true"></span>${picture(name, {
          alt: x.screenshotsAlt[key],
          sizes: '(min-width: 1024px) 240px, 44vw',
        })}<figcaption class="photo-ref" aria-hidden="true">${T.photoRef(i + 1)}</figcaption></figure>`,
    )
    .join('');
  return `
  <section id="tiny-legion" class="sec comp-sec tl" data-state="game" aria-labelledby="tl-title">
    <div class="tl-bg" aria-hidden="true"></div>
    ${sheetHead('05', `<span class="v-plan">${T.sheet}</span><span class="v-game">${T.game.sheet}</span>`, T.ref)}
    <div class="tl-grid">
      <div class="tl-copy">
        ${compTag(T.ref, p.kind)}
        <h2 id="tl-title" class="tl-name">${p.name.split(' ').map((w) => `<span>${w}</span>`).join(' ')}</h2>
        ${status(c, p)}
        <p class="tl-tagline">${p.tagline}</p>
        <p class="tl-pitch">${p.pitch}</p>
        <ul class="tl-feats" role="list">${feats}</ul>
      </div>
      <div class="tl-chip" data-comp="u1" data-ref="${T.ref}">
        <div class="chip-top" aria-hidden="true">${ref(T.ref)}<span class="chip-part">${T.part}</span>${led()}${led()}</div>
        ${pins(9, 'pins--top')}
        <div class="tl-stage" data-through tabindex="0" role="group" aria-label="${esc(COPY.a11y.runner)}">
          <div class="tl-road" aria-hidden="true"></div>
          <canvas class="tl-canvas" aria-hidden="true"></canvas>
          <div class="tl-lcd" aria-hidden="true"></div>
          <div class="tl-fallback">${picture('tl-raw-battle-horde', { alt: x.screenshotsAlt['01-bataille'], sizes: '(min-width: 1024px) 420px, 80vw' })}</div>
          <div class="tl-notes" aria-hidden="true">
            <span class="tl-note tl-note--road">${T.road}</span>
            <span class="tl-note tl-note--gate">${T.gate}</span>
            <span class="tl-note tl-note--unit">${T.unit}</span>
          </div>
          <p class="tl-boot" aria-hidden="true">${T.booting}</p>
          <p class="tl-lcd-l" aria-hidden="true">${T.screen}</p>
        </div>
        ${pins(9, 'pins--bot')}
        <span class="pin-anchor pin-anchor--l tl-pin" data-pin aria-hidden="true"></span>
        <div class="tl-controls">
          <button class="btn btn--power" type="button" aria-pressed="false" data-on="${T.powerOff}" data-off="${T.powerOn}">${led()}<span data-label>${T.powerOn}</span></button>
          <button class="btn btn--boost" type="button" data-plan="${T.boost}" data-game="${T.game.boost}">${T.boost}</button>
          <button class="btn btn--merge" type="button">${T.merge}</button>
          <p class="tl-count"><span class="tl-count-k" data-plan="${T.legion}" data-game="${T.game.legion}">${T.legion}</span><output class="tl-count-v">—</output><span class="tl-rank"></span></p>
          <p class="tl-evolve sr-only" aria-live="polite"></p>
          <p class="tl-hint"><span class="tl-steer" data-plan="${T.steer}" data-game="${T.game.steer}">${T.steer}</span><span class="tl-hint-plan">${x.gateHint} · ${x.mergeHint}</span></p>
        </div>
      </div>
    </div>
    ${facts(p, 'tl-facts')}
    <div class="tl-sheet">
      <h3 class="mono-label tl-sheet-t">${T.extrasTitle}</h3>
      <dl class="tl-specs">
        <div><dt>${T.extras.ranks}</dt><dd>${list(x.ranks)}</dd></div>
        <div><dt>${T.extras.powers}</dt><dd>${list(x.powers)}</dd></div>
        <div><dt>${T.extras.bosses}</dt><dd>${list(x.bosses)}</dd></div>
        <div><dt>${T.extras.modes}</dt><dd><ul role="list" class="modes">${modes}</ul></dd></div>
      </dl>
    </div>
    <div class="tl-photos">
      <p class="mono-label tl-photos-t" aria-hidden="true">${T.photos}</p>
      ${shots}
      <figure class="photo photo--video" data-video><span class="tape" aria-hidden="true"></span>
        <img class="tl-poster" src="/shared/video/tl-loop${en}-poster.webp" alt="${esc(plain(x.videoLabel))}" width="540" height="960" loading="lazy" decoding="async">
        <figcaption class="photo-ref" aria-hidden="true">${T.videoRef}</figcaption>
      </figure>
    </div>
    <div class="tl-foot">
      <p class="aside">${ref(COPY.comp.note, 'ref--note')}${p.aside}</p>
      <p class="tl-privacy">${link(p.links![0])}</p>
    </div>
  </section>`;
}

function readseal(c: SiteContent): string {
  const p = c.projects.readseal;
  const x = c.readsealExtras;
  const R = COPY.rs;
  const total = 5;
  const feats = p.features.map((f, i) => `<li><span class="feat-n" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span><h3 class="feat-t">${f.title}</h3><p>${f.text}</p></li>`).join('');
  const paras = x.policyParagraphs.map((t, i) => `<p class="pp is-read" data-pp="${i}">${t}</p>`).join('');
  const rows = x.register.rows
    .map(
      (r, i) =>
        `<tr class="reg-${r.status}"><th scope="row">${r.who}</th><td><span class="reg-st">${R.status[r.status]}</span></td><td>${r.status === 'confirmed' ? 'v3' : '—'}</td><td class="reg-date">${R.dates[i] ?? '—'}</td></tr>`,
    )
    .join('');
  const cols = x.register.columns.map((col) => `<th scope="col">${col}</th>`).join('');
  // reminders on a day axis: J−7 … échéance (J) … J+3
  const day = (r: string) => Number(r.replace(/^J/, '').replace('−', '-').replace('+', ''));
  const span = [Math.min(...x.reminders.map(day)), Math.max(...x.reminders.map(day))];
  const pos = (d: number) => ((d - span[0]) / (span[1] - span[0])).toFixed(3);
  const rem = x.reminders.map((r) => `<li style="--x:${pos(day(r))}" class="${day(r) > 0 ? 'late' : ''}">${r}</li>`).join('');
  const ticks = Array.from({ length: 41 }, (_, i) => `<i${i % 5 === 0 ? ' class="maj"' : ''}></i>`).join('');
  return `
  <section id="readseal" class="sec comp-sec rs" aria-labelledby="rs-title">
    ${sheetHead('06', R.sheet, R.ref)}
    <div class="rs-grid">
      <div class="rs-copy">
        ${compTag(R.ref, p.kind)}
        <h2 id="rs-title" class="rs-name">${readsealLogo}<span>${p.name}</span></h2>
        ${status(c, p)}
        ${vendorLink(c, 'rs-vendor')}
        <p class="rs-tagline">${p.tagline}</p>
        <p class="rs-shout">${p.shout}</p>
        <p class="rs-pitch">${p.pitch}</p>
      </div>
      <div class="rs-desk is-sealed" data-comp="u2" data-ref="${R.ref}">
        <article class="policy" aria-labelledby="policy-title">
          <h3 id="policy-title" class="policy-title">${x.policyTitle}</h3>
          <div class="policy-head">
            <div class="policy-by">
              <span class="avatar" aria-hidden="true">${R.byline.split(' ').map((w) => w[0]).join('')}</span><span class="by-name">${R.byline}</span>
              <button class="rs-counter" type="button" aria-expanded="true" aria-controls="rs-pop"><span class="rs-count" aria-live="polite">${x.counterLabel(total, total)}</span></button>
            </div>
            <div class="rs-pop" id="rs-pop">
              <label class="rs-att"><input type="checkbox" class="rs-check" checked> <span>${x.attestation}</span></label>
              <button class="rs-btn" type="button">${x.button}</button>
            </div>
          </div>
          <div class="policy-body">${paras}</div>
          <div class="rs-stamp" aria-hidden="true">
            <div class="qc"><span class="qc-k">${R.qc}</span><span class="qc-v">${R.qcSub}</span></div>
            <div class="seal">${readsealLogo}<span class="seal-l">${x.button}</span></div>
          </div>
          <p class="rs-sealed" role="status"><span>${x.sealed}</span></p>
        </article>
        <div class="rs-ruler" aria-hidden="true"><span class="ruler-ticks">${ticks}</span><span class="ruler-cursor"><span class="ruler-l">${R.ruler}</span></span></div>
        <span class="pin-anchor pin-anchor--r" data-pin aria-hidden="true"></span>
      </div>
    </div>
    <div class="rs-specs">
      <h3 class="mono-label">${R.featuresTitle}</h3>
      <ol class="rs-feats" role="list">${feats}</ol>
      ${facts(p, 'rs-facts')}
    </div>
    <div class="rs-log">
      <div class="reg-wrap is-frozen">
        <table class="register">
          <caption>${x.register.title}</caption>
          <thead><tr>${cols}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <span class="reg-hatch" aria-hidden="true"></span>
        <span class="reg-stamp" aria-hidden="true">${R.frozenStamp}</span>
        <p class="reg-frozen" role="status"><span>${x.register.frozen}</span></p>
      </div>
      <div class="rs-rem">
        <p class="mono-label">${R.remindersTitle}</p>
        <ol class="rem" role="list">${rem}</ol>
        <p class="rem-due" aria-hidden="true" style="--x:${pos(0)}">${R.due}</p>
      </div>
    </div>
    <div class="rs-plates">
      <figure class="plate plate--a"><span class="plate-ref" aria-hidden="true">${R.plates[0]}</span>${picture('rs-confirm', { alt: x.screenshotsAlt.confirm, sizes: '(min-width: 1024px) 560px, 92vw' })}</figure>
      <figure class="plate plate--b"><span class="plate-ref" aria-hidden="true">${R.plates[1]}</span>${picture('rs-register', { alt: x.screenshotsAlt.register, sizes: '(min-width: 1024px) 480px, 92vw' })}</figure>
      <p class="plates-note">${x.statusNote}</p>
    </div>
    <p class="aside">${ref(COPY.comp.note, 'ref--note')}${p.aside}</p>
  </section>`;
}

function thirdwatch(c: SiteContent): string {
  const p = c.projects.thirdwatch;
  const x = c.thirdwatchExtras;
  const W = COPY.tw;
  const feats = p.features.map((f) => `<li><h3 class="feat-t">${f.title}</h3><p>${f.text}</p></li>`).join('');
  const steps = x.scenario
    .map((s, i) => `<li class="tp" style="--i:${i}"><span class="tp-pad" aria-hidden="true"></span><span class="tp-n">${W.tp(i + 1)}</span><code class="tp-s">${s}</code><span class="tp-ok" aria-hidden="true">${W.ok}</span></li>`)
    .join('');
  const pinsL = W.pins.slice(0, 4).map((n, i) => `<li><span>${i + 1}</span>${n}</li>`).join('');
  const pinsRight = [7, 6, 5, 4].map((k) => `<li>${W.pins[k]}<span>${k + 1}</span></li>`).join('');
  return `
  <section id="thirdwatch" class="sec comp-sec tw" aria-labelledby="tw-title">
    <div class="tw-bg" aria-hidden="true"></div>
    ${sheetHead('04', W.sheet, W.ref)}
    <div class="tw-grid">
      <div class="tw-copy">
        ${compTag(W.ref, p.kind)}
        <h2 id="tw-title" class="tw-name">${p.name}</h2>
        ${status(c, p)}
        <p class="tw-tagline">${p.tagline}</p>
        <p class="tw-shout">${p.shout}</p>
        <p class="tw-pitch">${p.pitch}</p>
        <p class="tw-cta">${link(p.cta!, 'class="btn btn--tw"', c.a11y.newTab)}<span class="tw-trial">${x.trial}</span></p>
      </div>
      <div class="tw-bench" data-comp="u3" data-ref="${W.ref}">
        <div class="scope">
          <div class="scope-screen">
            <canvas class="scope-c" aria-hidden="true"></canvas>
            <p class="scope-ro scope-ro--tl" aria-hidden="true"><span>${W.scope}</span><span class="scope-up">${W.up}</span></p>
            <p class="scope-ro scope-ro--tr" aria-hidden="true"><span class="scope-ms">—</span> ${W.scopeUnit}</p>
            <p class="scope-ro scope-ro--bl" aria-hidden="true">${W.timebase}</p>
          </div>
          <div class="scope-panel" aria-hidden="true"><i class="knob"></i><i class="knob"></i><i class="knob knob--s"></i><span class="bnc"></span><span class="bnc-l">${W.probe}</span></div>
          <p class="scope-label">${x.uptimeLabel}</p>
          <span class="pin-anchor pin-anchor--r" data-pin aria-hidden="true"></span>
        </div>
        <div class="t555">
          <ul class="t555-pins t555-pins--l" role="list" aria-hidden="true">${pinsL}</ul>
          <div class="t555-body">
            <p class="t555-name" aria-hidden="true">${W.chip}<span>${W.chipRole}</span></p>
            <p class="t555-k">${x.tokenLabel}</p>
            <p class="t555-ttl" aria-hidden="true"><span class="ttl-k">${W.ttl}</span><span class="ttl-v">00:15</span></p>
            <span class="t555-bar" aria-hidden="true"><i></i></span>
            <code class="t555-tok" aria-hidden="true">eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvd2wifQ.c2VhbGVk</code>
            <p class="t555-state" role="status"><span>${x.tokenRefreshed}</span></p>
          </div>
          <ul class="t555-pins t555-pins--r" role="list" aria-hidden="true">${pinsRight}</ul>
        </div>
      </div>
    </div>
    <div class="tw-scenario">
      <h3 class="mono-label">${W.scenarioTitle}</h3>
      <ol class="tps" role="list">${steps}</ol>
    </div>
    <div class="tw-specs">
      <h3 class="mono-label">${W.featuresTitle}</h3>
      <ul class="tw-feats" role="list">${feats}</ul>
      ${facts(p, 'tw-facts')}
      <div class="tw-io">
        <div><h3 class="mono-label">${W.channelsTitle}</h3><ul role="list" class="outs">${x.alertChannels.map((a, i) => `<li><span aria-hidden="true">OUT${i + 1}</span>${a}</li>`).join('')}</ul></div>
        <div><h3 class="mono-label">${W.stackTitle}</h3><ul role="list" class="chips chips--tw">${p.stack!.map((s) => `<li>${s}</li>`).join('')}</ul></div>
      </div>
    </div>
    <p class="aside">${ref(COPY.comp.note, 'ref--note')}${p.aside}</p>
  </section>`;
}

function openSource(c: SiteContent): string {
  const o = c.openSource;
  const repos = pinnedRepos(c);
  const order = ['Verrou', 'atelier', 'OctopusFTP'];
  repos.sort((a, b) => order.indexOf(a.name) - order.indexOf(b.name));
  const O = COPY.os;
  const viz = (name: string) => {
    if (name === 'Verrou')
      return `<svg class="viz viz--lock" viewBox="0 0 240 200" aria-hidden="true">
        <path class="lk-axis" d="M120 6V172"/>
        <g class="lk-shackle"><path d="M92 92V58a28 28 0 0 1 56 0v34" /><path class="lk-shackle-in" d="M100 92V58a20 20 0 0 1 40 0v34"/></g>
        <g class="lk-body"><rect x="78" y="92" width="84" height="66" rx="6"/><path class="lk-hatch" d="M86 150l20-20M98 150l20-20M110 150l20-20M122 150l20-20M134 150l20-20"/></g>
        <g class="lk-cyl"><circle cx="120" cy="118" r="11"/><path d="M120 118v16"/></g>
        <g class="lk-bolt"><rect x="148" y="74" width="24" height="10" rx="2"/></g>
        <g class="lk-labels">
          <path class="lk-lead" d="M150 40H196"/><text x="200" y="44">1</text>
          <path class="lk-lead" d="M162 120H196"/><text x="200" y="124">2</text>
          <path class="lk-lead" d="M108 124H44"/><text x="34" y="128" text-anchor="end">3</text>
          <path class="lk-lead" d="M172 79H196"/><text x="200" y="83">4</text>
        </g>
        <text class="lk-state" x="120" y="190" text-anchor="middle">${O.verrou.locked}</text>
      </svg>
      <ol class="viz-legend" aria-hidden="true">${O.verrou.parts.map((p) => `<li>${p}</li>`).join('')}</ol>`;
    if (name === 'atelier')
      return `<svg class="viz viz--bus" viewBox="0 0 240 200" aria-hidden="true">
        <path class="bus-main" d="M14 100H40"/>
        ${[0, 1, 2, 3]
          .map((i) => {
            const y = 34 + i * 44;
            const bend = 40 + Math.abs(100 - y);
            // the lane is cut at the switch (contacts at x 138 and 162): only a closed arm joins it
            const toSwitch = Math.SQRT2 * Math.abs(100 - y) + (138 - bend);
            const total = toSwitch + (214 - 138);
            return `<g class="bus-lane${i < 2 ? ' is-approved' : ''}" style="--i:${i};--stop:${f2(-(toSwitch - 12))};--end:${f2(-(total + 12))}"><path class="bus-l" d="M40 100L${f2(bend)} ${y}H138M162 ${y}H214"/><path class="bus-pkt" d="M40 100L${f2(bend)} ${y}H214"/><g class="bus-sw" transform="translate(150 ${y})"><circle cx="-12" cy="0" r="2.6"/><circle cx="12" cy="0" r="2.6"/><path class="bus-sw-arm" d="M-12 0L10 -9"/></g><text x="214" y="${y - 7}" text-anchor="end">${O.atelier.lanes[i]}</text></g>`;
          })
          .join('')}
        <text class="bus-main-t" x="14" y="92">${O.atelier.main}</text>
        <text class="bus-gate-t" x="150" y="196" text-anchor="middle">${O.atelier.gate}</text>
      </svg>`;
    return `<svg class="viz viz--fan" viewBox="0 0 240 200" aria-hidden="true">
        <rect class="fan-src" x="10" y="84" width="34" height="32" rx="3"/>
        <text class="fan-src-t" x="27" y="104" text-anchor="middle">${O.octopus.src}</text>
        ${Array.from({ length: 8 }, (_, i) => {
          const y = 16 + i * 24;
          const dy = y - 100;
          const k = Math.abs(dy);
          const d = `M44 100H${f2(70)}L${f2(70 + k)} ${y}H226`;
          return `<g class="fan-arm" style="--i:${i}"><path class="fan-l" d="${d}"/><path class="fan-pkt" d="${d}"/><circle class="fan-pad" cx="226" cy="${y}" r="3.4"/></g>`;
        }).join('')}
        <text class="fan-x" x="226" y="198" text-anchor="end">${O.octopus.fan}</text>
      </svg>`;
  };
  const items = repos
    .map((r) => {
      const R = O.refs[r.name] ?? 'J';
      const comp = R.toLowerCase();
      return `<li class="conn conn--${r.name.toLowerCase()}" data-comp="${comp}">
        <div class="conn-hdr" aria-hidden="true">${pins(8, 'pins--hdr')}<span class="pin-anchor pin-anchor--t" data-pin></span></div>
        <div class="conn-body">
          <p class="comp-tag">${ref(R)}${led()}<span class="comp-kind">${r.stack.join(' · ')}</span></p>
          <h3 class="conn-name">${r.name}</h3>
          <p class="conn-pitch">${r.pitch}</p>
          <div class="conn-viz">${viz(r.name)}</div>
          <p class="conn-detail">${r.detail}</p>
          <p class="conn-link"><a href="${esc(r.url)}" target="_blank" rel="noopener">${c.ui.source}<span class="sr-only"> ${r.name} ${c.a11y.newTab}</span></a></p>
        </div>
      </li>`;
    })
    .join('');
  return `
  <section id="open-source" class="sec os" aria-labelledby="os-title">
    ${sheetHead('07', COPY.os.sheet, 'J1–J3')}
    <div class="os-head">
      <p class="kicker">${o.kicker}</p>
      <h2 id="os-title" class="h2">${o.title}</h2>
      <p class="os-text">${o.text}</p>
    </div>
    <ul class="os-list" role="list">${items}</ul>
    <p class="os-profile">${link(o.profile, 'class="btn btn--line"', c.a11y.newTab)}</p>
  </section>`;
}

const f2 = (n: number) => (Math.round(n * 10) / 10).toString();

function contact(c: SiteContent): string {
  const k = c.contact;
  const J = COPY.contact;
  const links = [
    `<li><span class="ct-k">${k.emailLabel}</span>${mailto(c, 'class="ct-v"')}</li>`,
    `<li><span class="ct-k">${k.githubLabel}</span><a class="ct-v" href="${SITE.github}" target="_blank" rel="noopener">github.com/${SITE.githubHandle}<span class="sr-only"> ${c.a11y.newTab}</span></a></li>`,
    SITE.linkedin ? `<li><span class="ct-k">${k.linkedinLabel}</span><a class="ct-v" href="${esc(SITE.linkedin)}" target="_blank" rel="noopener">LinkedIn<span class="sr-only"> ${c.a11y.newTab}</span></a></li>` : '',
  ].join('');
  return `
  <section id="contact" class="sec contact" aria-labelledby="contact-title">
    ${sheetHead('08', J.sheet, J.ref)}
    <div class="ct-grid">
      <div class="ct-copy">
        <p class="kicker">${k.kicker}</p>
        <h2 id="contact-title" class="h2 ct-title">${k.title}</h2>
        <p class="ct-text">${k.text}</p>
        <ul class="ct-links" role="list">${links}</ul>
        <p class="ct-avail">${k.availability}</p>
      </div>
      <div class="j0" data-comp="j0" aria-hidden="true">
        <div class="j0-body">
          <p class="j0-head">${ref(J.ref)}${led()}</p>
          <span class="j0-slot">${'<i></i>'.repeat(10)}</span>
          <p class="j0-plug">${J.plug}</p>
        </div>
        <span class="pin-anchor pin-anchor--r" data-pin></span>
      </div>
    </div>
  </section>`;
}

function footer(c: SiteContent): string {
  const F = COPY.footer;
  const tb = F.titleBlock.map((r) => `<div class="tb-c"><dt>${r.k}</dt><dd>${r.v}</dd></div>`).join('');
  const rev = F.revisions;
  return `
  <footer class="foot">
    <div class="foot-tb">
      <div class="foot-brand">${owlSVGPrefixed('foot', { decorative: true, className: 'foot-owl' })}<p class="foot-word" aria-hidden="true">Owl<span>W</span>orks</p></div>
      <dl class="tb tb--foot">${tb}</dl>
      <table class="rev">
        <caption>${rev.caption}</caption>
        <thead><tr>${rev.columns.map((x) => `<th scope="col">${x}</th>`).join('')}</tr></thead>
        <tbody>${rev.rows.map((r) => `<tr>${r.map((x, i) => (i === 0 ? `<th scope="row">${x}</th>` : `<td>${x}</td>`)).join('')}</tr>`).join('')}</tbody>
      </table>
      <div class="foot-legal">
        <nav aria-label="${c.footer.legal.label}"><ul role="list"><li><a href="${c.footer.legal.href}">${c.footer.legal.label}</a></li><li><a href="${c.footer.tinyLegionPrivacy.href}">${c.footer.tinyLegionPrivacy.label}</a></li></ul></nav>
        <p>${c.footer.noTracking}</p>
        <p>${c.footer.madeBy} <span class="foot-cyan">${F.cyanHint}</span></p>
      </div>
      <p class="foot-line">${c.footer.line}</p>
      <p class="foot-top"><a href="#top">${c.footer.backToTop}</a></p>
    </div>
  </footer>`;
}

/** the few strings main.ts needs at runtime (no copy is hardcoded in JS) */
function clientData(c: SiteContent): string {
  const x = c.readsealExtras;
  const data = {
    console: c.easterEgg.console,
    hoot: c.easterEgg.hoot,
    counter: Array.from({ length: 6 }, (_, n) => x.counterLabel(n, 5)),
    sealed: x.sealed,
    frozen: x.register.frozen,
    tokenRefreshed: c.thirdwatchExtras.tokenRefreshed,
    lang: c.locale,
    cyanKey: COPY.tools.cyanKey,
    probe: COPY.probe,
    legionLive: COPY.a11y.legionLive,
    tl: { frameTitle: COPY.tl.frameTitle, powerOn: COPY.tl.powerOn, evolved: COPY.tl.game.evolved },
    tw: { valid: COPY.tw.valid, expired: COPY.tw.expired },
  };
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/* ---------------------------------------------------------------- page */

export function render(c: SiteContent) {
  useCopy(c);
  const cols = Array.from({ length: 8 }, (_, i) => `<span>${i + 1}</span>`).join('');
  const zones = zoneLetters(36)
    .map((z) => `<span>${z}</span>`)
    .join('');
  const body = `
  <a class="skip-link" href="#main">${c.a11y.skip}</a>
  <div class="sheet">
    <div class="frame-cols" aria-hidden="true">${cols}</div>
    <div class="frame-zones frame-zones--l" aria-hidden="true">${zones}</div>
    <div class="frame-zones frame-zones--r" aria-hidden="true">${zones}</div>
    ${header(c)}
    <main id="main" tabindex="-1">
      ${hero(c)}
      ${studio(c)}
      ${intro(c)}
      ${thirdwatch(c)}
      ${tinyLegion(c)}
      ${readseal(c)}
      ${openSource(c)}
      ${contact(c)}
    </main>
    ${footer(c)}
    <svg class="board" aria-hidden="true" focusable="false"><g class="board-trunk"></g><g class="board-branches"></g><g class="board-pulses"></g><path class="board-tail"/></svg>
    <div class="electron" aria-hidden="true"><i></i></div>
  </div>
  <script type="application/json" id="ow-data">${clientData(c)}</script>
  <div class="probe" aria-hidden="true"><i class="probe-h"></i><i class="probe-v"></i><span class="probe-t"><span class="probe-x">${COPY.probe.x} 0</span><span class="probe-y">${COPY.probe.y} 0</span><span class="probe-r"></span></span></div>`;

  return {
    head:
      head(c, {
        path: c.paths.home,
        alternates: alternatesFor('home'),
        themeColor: SITE.colors.cream,
        preloadFonts: ['oxanium-var.woff2', 'jetbrains-mono-var.woff2', 'saira-text.woff2'],
      }) + orgJsonLd(),
    body: markPlaceholders(body),
    htmlAttrs: 'class="no-js"',
  };
}
