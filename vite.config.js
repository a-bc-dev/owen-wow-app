import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/owen-wow-app/',
  plugins: [react()],
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
})
