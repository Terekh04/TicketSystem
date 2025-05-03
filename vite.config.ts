import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // подтягиваем переменные через process.env
  const API_URL    = process.env.VITE_API_URL    || ''
  const API_PREFIX = process.env.VITE_API_PREFIX || ''

  return {
    plugins: [react()],
    server: {
      proxy: {
        // проксируем только при dev (mode==='development')
        '/api': {
          target: API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(new RegExp(`^${API_PREFIX}`), '')
        }
      }
    },
    define: {
      // чтобы в клиентском коде import.meta.env.VITE_* подхватывалось
      'process.env.VITE_API_URL': JSON.stringify(API_URL),
      'process.env.VITE_API_PREFIX': JSON.stringify(API_PREFIX),
    }
  }
})
