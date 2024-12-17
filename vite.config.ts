import path from "path"
import react from "@vitejs/plugin-react"
import eslint from 'vite-plugin-eslint';
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/calculate': 'http://localhost:8900',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});