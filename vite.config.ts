import { defineConfig } from "vite";
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5001,
  },
  resolve: {

  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  },
  build: {
    chunkSizeWarningLimit: 1500
  },
  plugins: [

  ],
});
