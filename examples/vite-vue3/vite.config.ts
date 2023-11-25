import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { svgIcons } from 'vite-svg-icons'


export default defineConfig({
  plugins: [
    vue(),
    svgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // icon symbolId
      // default
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
