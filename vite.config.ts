import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss"
// const isH5 = process.env.UNI_PLATFORM === "h5";
// https://vitejs.dev/config/
const postcssPlugins = [require('autoprefixer')(), require('tailwindcss')()];
export default defineConfig({
  plugins: [uni()],
  css:{
    postcss: {
      plugins: postcssPlugins,
    },
  }
});
