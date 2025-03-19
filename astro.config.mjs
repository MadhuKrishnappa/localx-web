import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'static',  // Use 'server' if using SSR
  site: 'https://localx.in', // Change if using a custom domain
  adapter: undefined,
});
