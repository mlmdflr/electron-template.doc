import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from "vite-plugin-html";
import copy from 'rollup-plugin-copy'
import Markdown from 'vite-plugin-md'
import { join, resolve } from "path";
import h from "highlight.js";
import mdCfg from "./src/cfg/mdCfg";
import { getExternal } from "./scripts";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        //预处理
        additionalData: '@import "@/scss/index.scss";@import "@/scss/mixin.scss";'
      }
    }
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.ts',
      inject: {
        data: {
          title: mdCfg.documentName,
        }
      }
    }),
    copy({
      targets: [
        { src: `${mdCfg.path}/**.assets`, dest: 'public' }
      ],
      verbose: true
    }),
    Markdown(
      {
        markdownItOptions: {
          highlight: (str, lang): string => {
            if (lang && h.getLanguage(lang)) {
              try {
                return h.highlight(str, { language: lang }).value;
              } catch (__) { }
            }
            return '';
          }
        }
      }
    ),
    vue({
      script: {
        refSugar: true
      }, include: [/\.vue$/, /\.md$/],
    })],
  resolve: {
    alias: [{ find: '@', replacement: resolve(join(__dirname, 'src')) }]
  },
  build: {
    rollupOptions: {
      external: getExternal(mdCfg.path)
    }
  }
})
