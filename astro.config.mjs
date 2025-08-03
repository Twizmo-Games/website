// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    // site: 'https://twizmo-games.',
    site: 'https://twizmo-games.github.io/website/',
    base: 'website',
    vite: {
        plugins: [tailwindcss()]
    },

    integrations: [alpinejs(), icon()]
});