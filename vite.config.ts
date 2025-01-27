import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(
    { preprocess: sveltePreprocess() }
  )],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: "script.js",
        assetFileNames: "style.css"
      }
    }
  }
})