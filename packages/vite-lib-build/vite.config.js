import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'main.js'),
        alternate: resolve(__dirname, 'alternate.js'),
      },
    },
    // emptyOutDir: true,
  },
})
