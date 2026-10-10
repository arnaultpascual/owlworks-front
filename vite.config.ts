import { defineConfig, runnerImport, type Plugin, type ViteDevServer } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

/**
 * Build-time rendering: an index.html names its renderer (<!--ow:render /site/render.ts-->,
 * optional #arg), whose render(content, arg) fills <!--ow:head--> and <!--ow:body-->.
 * The language comes from <html lang>.
 */
function owlworksRender(): Plugin {
  let dev: ViteDevServer | undefined;
  /** dev: Vite's SSR loader (invalidated on edit); build: one-shot runner import */
  const load = async (id: string) => {
    if (dev) return dev.ssrLoadModule(id);
    return (await runnerImport<Record<string, any>>(resolve(root, '.' + id), { configFile: false, logLevel: 'error' })).module;
  };
  return {
    name: 'owlworks-render',
    configureServer(server) {
      dev = server;
    },
    handleHotUpdate({ file, server }) {
      if (/\/(render|content)\.ts$|\/shared\/(render|brand|data)\//.test(file)) {
        server.ws.send({ type: 'full-reload' });
      }
    },
    transformIndexHtml: {
      order: 'pre',
      async handler(html) {
        const m = html.match(/<!--ow:render (\S+?)(?:#(\S+))?-->/);
        if (!m) return html;
        const [{ getContent }, mod] = await Promise.all([load('/shared/content.ts'), load(m[1])]);
        // the page's language: its <html lang="…"> (fr by default)
        const lang = html.match(/<html[^>]*\blang="(\w+)"/)?.[1] ?? 'fr';
        const out = await mod.render(getContent(lang), m[2]);
        let page = html
          .replace(m[0], '')
          .replace('<!--ow:head-->', out.head ?? '')
          .replace('<!--ow:body-->', out.body ?? '');
        if (out.htmlAttrs) page = page.replace(/<html([^>]*)>/, `<html$1 ${out.htmlAttrs}>`);
        if (out.bodyAttrs) page = page.replace(/<body([^>]*)>/, `<body$1 ${out.bodyAttrs}>`);
        return page;
      },
    },
  };
}

const input = {
  home: resolve(root, 'index.html'),
  'legal-mentions': resolve(root, 'legal/mentions-legales/index.html'),
  'legal-tl-privacy': resolve(root, 'legal/tiny-legion/confidentialite/index.html'),
  'home-en': resolve(root, 'en/index.html'),
  'legal-mentions-en': resolve(root, 'en/legal/legal-notice/index.html'),
  'legal-tl-privacy-en': resolve(root, 'en/legal/tiny-legion/privacy/index.html'),
  'not-found': resolve(root, '404.html'),
};

export default defineConfig({
  appType: 'mpa',
  plugins: [owlworksRender()],
  server: { port: 5173, host: true },
  preview: { port: 4173 },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2022',
    assetsInlineLimit: 2048,
    modulePreload: { polyfill: false },
    rollupOptions: { input },
  },
});
