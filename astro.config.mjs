// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
    trailingSlash: "always",
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "astro/entrypoints/prerender": fileURLToPath(new URL("./node_modules/astro/dist/entrypoints/prerender.js", import.meta.url))
            }
        }
    }
});
