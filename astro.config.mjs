import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.SITE_URL || process.env.CF_PAGES_URL || undefined,
  trailingSlash: 'never',
});
