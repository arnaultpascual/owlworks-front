/** Legal pages (one per language, with a FR / EN switch) and the bilingual 404. */
import type { LegalSection, PageId, SiteContent } from '../shared/content.ts';
import { SITE, locales } from '../shared/content.ts';
import { head, alternatesFor, markPlaceholders, plain } from '../shared/render/html.ts';
import { markdown } from '../shared/render/markdown.ts';
import { owlSVG } from '../shared/brand/owl.ts';

function section(s: LegalSection, i: number): string {
  let html = `<section class="lg-section" aria-labelledby="s${i}"><h2 id="s${i}">${s.title}</h2>`;
  let inList = false;
  for (const p of s.body) {
    if (p.startsWith('- ')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      html += `<li>${p.slice(2)}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<p>${p}</p>`;
    }
  }
  if (inList) html += '</ul>';
  if (s.todo) html += `<p class="lg-todo"><strong>À trancher</strong> ${s.todo}</p>`;
  return html + '</section>';
}

/** FR / EN links to this page in each language, the current one marked */
function switcher(c: SiteContent, page: PageId): string {
  const link = (l: SiteContent) =>
    `<a href="${l.paths[page]}" hreflang="${l.locale}" lang="${l.locale}"${l.locale === c.locale ? ' aria-current="page"' : ''}>${l.locale === 'fr' ? 'Français' : 'English'}</a>`;
  return `<nav class="lg-langs" aria-label="${c.legal.langNav}">${link(locales.fr)}${link(locales.en)}</nav>`;
}

function frame(c: SiteContent, main: string): string {
  const L = c.legal;
  return `
  <a class="skip-link" href="#main">${c.a11y.skip}</a>
  <header class="lg-header">
    <a class="lg-brand" href="${c.paths.home}" aria-label="${c.a11y.logo}">
      ${owlSVG({ decorative: true, className: 'lg-owl' })}
      <span>OwlWorks</span>
    </a>
    <a class="lg-back" href="${c.paths.home}">← ${L.back}</a>
  </header>
  <main id="main" class="lg-main">${main}
  </main>
  <footer class="lg-footer">
    <p>${c.footer.line}</p>
    <nav aria-label="${L.navLabel}"><a href="${c.paths.legal}">${c.footer.legal.label}</a> · <a href="${c.paths.tinyLegionPrivacy}">${c.footer.tinyLegionPrivacy.label}</a></nav>
  </footer>`;
}

/** 404: GitHub Pages has one for the whole site, so it speaks both languages */
function notFound(c: SiteContent) {
  const block = (l: SiteContent) => {
    const N = l.notFound;
    return `<div class="nf-lang" lang="${l.locale}">
      <p class="lg-kicker">${N.kicker}</p>
      ${l.locale === 'fr' ? `<h1>${N.title}</h1>` : `<p class="nf-title">${N.title}</p>`}
      <p class="lg-lede">${N.text}</p>
      <a class="lg-back" href="${l.paths.home}" hreflang="${l.locale}">← ${N.back}</a>
    </div>`;
  };
  const body = `
  <main id="main" class="nf">
    ${owlSVG({ decorative: true, className: 'nf-owl' })}
    ${block(locales.fr)}
    ${block(locales.en)}
  </main>`;
  return {
    head: head(c, { title: `${c.notFound.kicker} — OwlWorks`, description: c.notFound.text, path: '/404.html', themeColor: SITE.colors.cream, noindex: true }),
    body,
  };
}

function privacy(c: SiteContent) {
  const T = c.legal.tinyLegionPrivacy;
  const main = `
    <p class="lg-kicker">${T.kicker}</p>
    <h1>${T.h1} <span class="lg-h1-sub">Tiny Legion</span></h1>
    ${switcher(c, 'tinyLegionPrivacy')}
    <p class="lg-updated">${T.updated}</p>
    <article class="lg-article">
      ${markdown(T.md, { h2: 2, firstSectionClass: 'lg-brief' })}
    </article>`;
  return {
    head: head(c, {
      title: `${plain(T.title)} — OwlWorks`,
      description: T.description,
      path: c.paths.tinyLegionPrivacy,
      themeColor: SITE.colors.cream,
      alternates: alternatesFor('tinyLegionPrivacy'),
    }),
    body: frame(c, main),
  };
}

function mentions(c: SiteContent) {
  const doc = c.legal.mentions;
  const main = `
    <p class="lg-kicker">${doc.kicker}</p>
    <h1>${doc.title}</h1>
    ${switcher(c, 'legal')}
    <p class="lg-updated">${c.legal.updated}</p>
    ${doc.note ? `<p class="lg-status" role="note">${doc.note}</p>` : ''}
    ${doc.sections.map(section).join('\n')}`;
  return {
    head: head(c, {
      title: `${plain(doc.title)} — OwlWorks`,
      description: doc.description,
      path: c.paths.legal,
      themeColor: SITE.colors.cream,
      alternates: alternatesFor('legal'),
    }),
    body: markPlaceholders(frame(c, main)),
  };
}

export function render(c: SiteContent, page: 'mentions' | 'tl-privacy' | '404') {
  if (page === '404') return notFound(c);
  if (page === 'tl-privacy') return privacy(c);
  return mentions(c);
}
