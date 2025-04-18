import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration file
// https://vitejs.dev/config/
export default defineConfig({
  // Adding React plugin for Vite
  plugins: [react()]
})
