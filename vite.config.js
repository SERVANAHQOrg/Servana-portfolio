import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import path from 'path'   // ✅ needed for alias paths

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools() // 👈 enable image optimization
  ],
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
})
