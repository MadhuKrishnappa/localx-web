import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://madhukrishnappa.github.io/localx-web/',
  base: '/localx-web/', // Required for GitHub Pages subpath
  output: 'static',
});