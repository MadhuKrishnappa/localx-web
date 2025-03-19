import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://madhukrishnappa.github.io/localx-web/', // Ensure it's correct
  base: '/localx-web/',
  output: 'static',
  trailingSlash: 'always', // Ensures paths are correctly resolved
  build: {
    assets: '_astro/', // Ensure assets are in the correct folder
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/localx-web/'),
    },
  },
});
