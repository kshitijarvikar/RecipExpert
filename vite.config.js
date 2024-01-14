import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
