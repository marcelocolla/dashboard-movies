import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '@testing': path.resolve(__dirname, './src/__tests__'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './tests/vitest-setup.js',
  },
})
