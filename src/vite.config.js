import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default ({ mode }) => defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),//引入@路径
      '@': path.resolve(__dirname, 'src')
    },
  },
  base: './',
  plugins: [
    vue()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/style/base.scss";`
      }
    }
  },
})
