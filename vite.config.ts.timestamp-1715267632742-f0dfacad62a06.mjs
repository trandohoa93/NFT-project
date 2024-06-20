// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/Self-learn/project/larue_nft/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///D:/Self-learn/project/larue_nft/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Self-learn/project/larue_nft/node_modules/unplugin-vue-components/dist/vite.js";
import Layouts from "file:///D:/Self-learn/project/larue_nft/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Pages from "file:///D:/Self-learn/project/larue_nft/node_modules/vite-plugin-pages/dist/index.js";
import Vue from "file:///D:/Self-learn/project/larue_nft/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///D:/Self-learn/project/larue_nft/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vuetify from "file:///D:/Self-learn/project/larue_nft/node_modules/vite-plugin-vuetify/dist/index.mjs";
import { ElementPlusResolver, Vuetify3Resolver } from "file:///D:/Self-learn/project/larue_nft/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "D:\\Self-learn\\project\\larue_nft";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/mixins.scss";'
      }
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
    vuetify({
      autoImport: { labs: true }
    }),
    Layouts({
      layoutsDirs: "./src/layouts",
      pagesDirs: "./src/pages",
      defaultLayout: "default"
    }),
    Pages({
      dirs: "./src/pages"
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router"
      ],
      resolvers: [
        ElementPlusResolver(),
        Vuetify3Resolver()
      ]
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        Vuetify3Resolver()
      ]
    })
  ],
  eslintrc: {
    enabled: false,
    filepath: "./.eslintrc-auto-import.json",
    globalsPropValue: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTZWxmLWxlYXJuXFxcXHByb2plY3RcXFxcbGFydWVfbmZ0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTZWxmLWxlYXJuXFxcXHByb2plY3RcXFxcbGFydWVfbmZ0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9TZWxmLWxlYXJuL3Byb2plY3QvbGFydWVfbmZ0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5cclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXHJcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcclxuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBWdWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IHZ1ZXRpZnkgZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcclxuXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIsIFZ1ZXRpZnkzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiQC9hc3NldHMvc2Nzcy9taXhpbnMuc2Nzc1wiOycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlKCksXHJcbiAgICBWdWVKc3goKSxcclxuICAgIHZ1ZXRpZnkoe1xyXG4gICAgICBhdXRvSW1wb3J0OiB7IGxhYnM6IHRydWUgfSxcclxuICAgIH0pLFxyXG4gICAgTGF5b3V0cyh7XHJcbiAgICAgIGxheW91dHNEaXJzOiAnLi9zcmMvbGF5b3V0cycsXHJcbiAgICAgIHBhZ2VzRGlyczogJy4vc3JjL3BhZ2VzJyxcclxuICAgICAgZGVmYXVsdExheW91dDogJ2RlZmF1bHQnLFxyXG4gICAgfSksXHJcbiAgICBQYWdlcyh7XHJcbiAgICAgIGRpcnM6ICcuL3NyYy9wYWdlcycsXHJcbiAgICB9KSxcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxyXG4gICAgICBdLFxyXG4gICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKCksXHJcbiAgICAgICAgVnVldGlmeTNSZXNvbHZlcigpLFxyXG4gICAgICBdLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxyXG4gICAgICAgIFZ1ZXRpZnkzUmVzb2x2ZXIoKSxcclxuICAgICAgXSxcclxuXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGVzbGludHJjOiB7XHJcbiAgICBlbmFibGVkOiBmYWxzZSwgXHJcbiAgICBmaWxlcGF0aDogJy4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLCBcclxuICAgIGdsb2JhbHNQcm9wVmFsdWU6IHRydWUsIFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsT0FBTyxVQUFVO0FBQ3hTLFNBQVMsb0JBQW9CO0FBRTdCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGFBQWE7QUFFcEIsU0FBUyxxQkFBcUIsd0JBQXdCO0FBWHRELElBQU0sbUNBQW1DO0FBY3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxNQUNOLFlBQVksRUFBRSxNQUFNLEtBQUs7QUFBQSxJQUMzQixDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsSUFDakIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLE1BQ0osTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1Qsb0JBQW9CO0FBQUEsUUFDcEIsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQSxRQUNULG9CQUFvQjtBQUFBLFFBQ3BCLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFFRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1Ysa0JBQWtCO0FBQUEsRUFDcEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
