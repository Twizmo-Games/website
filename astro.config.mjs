// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://twizmo-games.com/',
  base: 'website',

  vite: {
      plugins: [tailwindcss()]
  },

  integrations: [alpinejs(), icon()],
  adapter: cloudflare()
});
