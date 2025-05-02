/// <reference types="node" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: mode === 'development' ? {
      proxy: {
        '/api': {
          target: 'https://ticketsystem-qfj9.onrender.com',
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/api/, ''),
        }
      }
    } : undefined // 👈 на случай, если не dev, чтобы не было ошибок
  };
});
