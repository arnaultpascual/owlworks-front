/** Minimal Markdown for the legal texts: ## headings (one <section> each), lists, tables, links, bold, italic. */

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** inline markup: escape, then links, bold, italic, typographic spaces */
export function inline(src: string): string {
  let s = escapeHtml(src);
  // [text](url)
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, (_m, t, u) => `<a href="${u}" rel="noopener">${t}</a>`);
  // bare URLs (not already inside an href)
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<)]+[^\s<).,;:])/g, (_m, pre, u) => `${pre}<a href="${u}" rel="noopener">${u.replace(/^https?:\/\//, '')}</a>`);
  // emails
  s = s.replace(/(^|[\s(])([\w.+-]+@[\w-]+\.[\w.-]*\w)/g, (_m, pre, e) => `${pre}<a href="mailto:${e}">${e}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
  // narrow no-break space before ; : ! ? and inside « » (French typography)
  s = s.replace(/ ([;:!?»])/g, ' $1').replace(/« /g, '« ');
  return s;
}

interface Options {
  /** level of "## " headings (default 2) */
  h2?: number;
  /** class added to the first section (e.g. the "In short" box) */
  firstSectionClass?: string;
  /** prefix for the generated heading ids */
  idPrefix?: string;
}

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export function markdown(md: string, o: Options = {}): string {
  const h = o.h2 ?? 2;
  const lines = md.replace(/\r/g, '').split('\n');
  const out: string[] = [];
  let i = 0;
  let inSection = false;
  let sectionCount = 0;

  const closeSection = () => {
    if (inSection) out.push('</section>');
    inSection = false;
  };

  const list = (start: number): [string, number] => {
    // nested lists by indentation (0 / 2 / 4 spaces)
    const items: { depth: number; text: string }[] = [];
    let j = start;
    while (j < lines.length && /^\s*- /.test(lines[j])) {
      const m = lines[j].match(/^(\s*)- (.*)$/)!;
      items.push({ depth: Math.floor(m[1].length / 2), text: m[2] });
      j++;
    }
    let html = '';
    let depth = -1;
    const open: boolean[] = [];
    for (const it of items) {
      while (depth < it.depth) {
        html += '<ul>';
        depth++;
        open.push(false);
      }
      while (depth > it.depth) {
        html += '</li></ul>';
        depth--;
        open.pop();
      }
      if (open[depth]) html += '</li>';
      html += `<li>${inline(it.text)}`;
      open[depth] = true;
    }
    while (depth >= 0) {
      html += '</li></ul>';
      depth--;
    }
    return [html, j];
  };

  const table = (start: number): [string, number] => {
    const rows: string[][] = [];
    let j = start;
    while (j < lines.length && /^\|/.test(lines[j].trim())) {
      const cells = lines[j].trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      if (!cells.every((c) => /^:?-{3,}:?$/.test(c))) rows.push(cells);
      j++;
    }
    const [head, ...body] = rows;
    const html =
      `<div class="md-table"><table><thead><tr>${head.map((c) => `<th scope="col">${inline(c)}</th>`).join('')}</tr></thead>` +
      `<tbody>${body.map((r) => `<tr>${r.map((c, k) => (k === 0 ? `<th scope="row">${inline(c)}</th>` : `<td>${inline(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
    return [html, j];
  };

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    const hm = line.match(/^(#{2,3}) (.*)$/);
    if (hm) {
      const level = hm[1].length === 2 ? h : h + 1;
      const id = `${o.idPrefix ?? ''}${slug(hm[2])}`;
      if (hm[1].length === 2) {
        closeSection();
        const cls = sectionCount === 0 && o.firstSectionClass ? ` ${o.firstSectionClass}` : '';
        out.push(`<section class="lg-section${cls}" aria-labelledby="${id}">`);
        inSection = true;
        sectionCount++;
      }
      out.push(`<h${level} id="${id}">${inline(hm[2])}</h${level}>`);
      i++;
      continue;
    }
    if (/^\s*- /.test(line)) {
      const [html, j] = list(i);
      out.push(html);
      i = j;
      continue;
    }
    if (/^\|/.test(line.trim())) {
      const [html, j] = table(i);
      out.push(html);
      i = j;
      continue;
    }
    // paragraph: consecutive non-empty lines (a line ending with two spaces or a lone line keeps a <br>)
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,3}) |^\s*- |^\|/.test(lines[i])) {
      para.push(inline(lines[i].trim()));
      i++;
    }
    out.push(`<p>${para.join('<br>')}</p>`);
  }
  closeSection();
  return out.join('\n');
}
