import path from 'node:path'
import { defineConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'

import { ElementPlusResolver, Vuetify3Resolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'local.d-soft.tech',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/mixins.scss";',
      },
    },
  },
  plugins: [
    Vue(),
    VueJsx(),
    vuetify({
      autoImport: { labs: true }
    }),
    Layouts({
      layoutsDirs: './src/layouts',
      pagesDirs: './src/pages',
      defaultLayout: 'default',
    }),
    Pages({
      dirs: './src/pages',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      resolvers: [
        ElementPlusResolver(),
        Vuetify3Resolver(),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        Vuetify3Resolver(),
      ],

    }),
  ],
  eslintrc: {
    enabled: false,
    filepath: './.eslintrc-auto-import.json',
    globalsPropValue: true,
  },
})
