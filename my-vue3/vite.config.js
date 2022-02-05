import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@vue',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  }
})