import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { less } from 'svelte-preprocess-less'

// 安装 svelte-preprocess-less  less, 然后这里配置, 使用的地方 style lang='less' 就可以用less 语法
// sass 也应该是类似的步骤

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: {
      style: less()
    }
  })]
})
