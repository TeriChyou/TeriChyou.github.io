import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // 💡 1. 引入新版 Tailwind 插件

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 💡 2. 把它加進 plugins 陣列中
  ],
  base: '/', // 如果是主網域專案（帳號.github.io）就寫 '/'
})