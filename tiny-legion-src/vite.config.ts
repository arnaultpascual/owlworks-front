import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Builds the Tiny Legion showcase from the game's sources (TINY_LEGION_REPO) into public/tiny-legion/. */
const here = fileURLToPath(new URL('.', import.meta.url));
const repo = process.env.TINY_LEGION_REPO ?? '';

export default defineConfig({
  root: here,
  base: '/tiny-legion/',
  publicDir: false,
  resolve: {
    alias: [
      { find: /^@tl-modules\//, replacement: resolve(repo, 'node_modules') + '/' },
      { find: /^@tl\//, replacement: resolve(repo, 'src') + '/' },
    ],
  },
  server: { fs: { allow: [here, repo] } },
  build: {
    outDir: resolve(here, '../public/tiny-legion'),
    emptyOutDir: true,
    target: 'es2022',
    chunkSizeWarningLimit: 2000,
    modulePreload: { polyfill: false },
  },
});
