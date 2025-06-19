// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/lib/remark.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://username.github.io/repository-name',
  base: '/cvfolio-mike',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap(), mdx({
    optimize: true,
    syntaxHighlight: 'shiki',
  })],
});