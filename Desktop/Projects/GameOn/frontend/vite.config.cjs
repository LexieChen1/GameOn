import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
};