import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  proxy:{
    '/api':'http://localhost:5174'
  },
  plugins: [react()],
})
