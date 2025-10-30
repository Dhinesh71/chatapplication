import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    headers: {
      'Content-Type': 'application/javascript'
    }
  },
  build: {
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  }
})
