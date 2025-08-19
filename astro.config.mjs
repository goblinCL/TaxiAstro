// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://txscloficial.com',
  base: '/',          // si vas a servir desde la raíz
  output: 'static',   // asegura salida estática
});
