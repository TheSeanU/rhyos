import { defineConfig } from 'vite'

import path from 'path'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

const srcPath = path.resolve('./src/')

export default defineConfig({
  plugins: [
    WindiCSS({
      scan: {
          dirs: ['./src'],
          fileExtensions: ['vue', 'js', 'ts', 'scss'],
      },
    }),
    vue({
        include: [/\.vue$/, /\.md$/],
    }),
  ],
  resolve: {
    alias: {
      pages: path.join(srcPath, 'pages'),
      resouces: path.join(srcPath, 'resouces'),
      router: path.join(srcPath, 'router')
    }
  },
  build: {  
    emptyOutDir: true,
    outDir: 'dist',
  }
})
