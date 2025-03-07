import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/static",
  build: {
    outDir: "../server/dist/static",
    manifest: true,
    rollupOptions: {
      input: "./src/main.tsx"
    }
  },
  server: {
    cors: {
      origin: "*"
    }
  }
})
