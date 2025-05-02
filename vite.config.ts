/// <refence types="node" />
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: mode === 'development' ? {
      proxy: {
        [env.VITE_API_PREFIX]: {
          target: 'https://ticketsystem-qfj9.onrender.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) =>
            path.replace(new RegExp(`^${env.VITE_API_PREFIX}`), '')
        }
      }
    } : undefined,
    define: {
      API_BASE: JSON.stringify(
        mode === 'production'
          ? `${env.VITE_API_URL}${env.VITE_API_PREFIX}`
          : env.VITE_API_PREFIX
      )
    }
  }
})
