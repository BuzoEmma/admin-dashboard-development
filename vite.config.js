import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './',
  esbuild: {
    loader: 'jsx', // to handle jsx by default in .js files
    include: /\.jsx?$/, // Use regex to include .js/.jsx files
    // loader: { '.js': 'jsx' }
  }
})
