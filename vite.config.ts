import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgr from "vite-plugin-svgr";

import config from './_config';
const pathResolve = (pathStr) => {
  return path.resolve(__dirname, pathStr)
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    svgr(),
    // partytownVite({
    //   dest: path.join(__dirname, 'dist', '~partytown')
    // }),
    createSvgIconsPlugin({
      // 指定需要缓存的svg图标文件夹，即需要识别的svg都应该放在这个文件夹下
      // iconDirs: [path.resolve(process.cwd(), 'src/assets/svgs')],
      // 或
      iconDirs: [pathResolve('./src/assets/commonSvg')],
      // 指定symbolId格式（这里的配置与6.2步骤中的引入svg组件的name配置项写法有关）
      symbolId: 'icon-[dir]-[name]',
    }),
    {
      name: 'dynamic-html',
      transformIndexHtml(html) {
        return html
          .replace(/%TITLE%/g, config.metadata.title)
          .replace(/%DESCRIPTION%/g, config.metadata.description)
          .replace(/%KEYWORDS%/g, config.metadata.keywords);
      }
    }
  ],
  server: {
    host: config.server.host,
    port: config.server.port
  }
});
