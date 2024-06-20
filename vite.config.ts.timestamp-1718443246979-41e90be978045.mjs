// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/vite/dist/node/index.js";
import AutoImport from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/unplugin-vue-components/dist/vite.js";
import Layouts from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Pages from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/vite-plugin-pages/dist/index.js";
import Vue from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJsx from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vuetify from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/vite-plugin-vuetify/dist/index.mjs";
import { ElementPlusResolver, Vuetify3Resolver } from "file:///E:/Study%20stuffs/IT/project-stuff/larue_nft/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_dirname = "E:\\Study stuffs\\IT\\project-stuff\\larue_nft";
var vite_config_default = defineConfig({
  server: {
    host: "local.d-soft.tech"
  },
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxTdHVkeSBzdHVmZnNcXFxcSVRcXFxccHJvamVjdC1zdHVmZlxcXFxsYXJ1ZV9uZnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFN0dWR5IHN0dWZmc1xcXFxJVFxcXFxwcm9qZWN0LXN0dWZmXFxcXGxhcnVlX25mdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovU3R1ZHklMjBzdHVmZnMvSVQvcHJvamVjdC1zdHVmZi9sYXJ1ZV9uZnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcblxyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xyXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcclxuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xyXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgdnVldGlmeSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5J1xyXG5cclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciwgVnVldGlmeTNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiAnbG9jYWwuZC1zb2Z0LnRlY2gnLFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIHNjc3M6IHtcclxuICAgICAgICBhZGRpdGlvbmFsRGF0YTogJ0BpbXBvcnQgXCJAL2Fzc2V0cy9zY3NzL21peGlucy5zY3NzXCI7JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICBWdWUoKSxcclxuICAgIFZ1ZUpzeCgpLFxyXG4gICAgdnVldGlmeSh7XHJcbiAgICAgIGF1dG9JbXBvcnQ6IHsgbGFiczogdHJ1ZSB9XHJcbiAgICB9KSxcclxuICAgIExheW91dHMoe1xyXG4gICAgICBsYXlvdXRzRGlyczogJy4vc3JjL2xheW91dHMnLFxyXG4gICAgICBwYWdlc0RpcnM6ICcuL3NyYy9wYWdlcycsXHJcbiAgICAgIGRlZmF1bHRMYXlvdXQ6ICdkZWZhdWx0JyxcclxuICAgIH0pLFxyXG4gICAgUGFnZXMoe1xyXG4gICAgICBkaXJzOiAnLi9zcmMvcGFnZXMnLFxyXG4gICAgfSksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW1wb3J0czogW1xyXG4gICAgICAgICd2dWUnLFxyXG4gICAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgXSxcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxyXG4gICAgICAgIFZ1ZXRpZnkzUmVzb2x2ZXIoKSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gICAgQ29tcG9uZW50cyh7XHJcbiAgICAgIHJlc29sdmVyczogW1xyXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcclxuICAgICAgICBWdWV0aWZ5M1Jlc29sdmVyKCksXHJcbiAgICAgIF0sXHJcblxyXG4gICAgfSksXHJcbiAgXSxcclxuICBlc2xpbnRyYzoge1xyXG4gICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICBmaWxlcGF0aDogJy4vLmVzbGludHJjLWF1dG8taW1wb3J0Lmpzb24nLFxyXG4gICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSxcclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRULE9BQU8sVUFBVTtBQUM3VSxTQUFTLG9CQUFvQjtBQUU3QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxhQUFhO0FBRXBCLFNBQVMscUJBQXFCLHdCQUF3QjtBQVh0RCxJQUFNLG1DQUFtQztBQWN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sWUFBWSxFQUFFLE1BQU0sS0FBSztBQUFBLElBQzNCLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxJQUNqQixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsUUFDVCxvQkFBb0I7QUFBQSxRQUNwQixpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1Qsb0JBQW9CO0FBQUEsUUFDcEIsaUJBQWlCO0FBQUEsTUFDbkI7QUFBQSxJQUVGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsSUFDVixrQkFBa0I7QUFBQSxFQUNwQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
