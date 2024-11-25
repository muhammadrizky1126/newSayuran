import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.jsx',
      refresh: true,
    }),
    react(),
  ],
  server: {
    // Mengubah port Vite
    port: 5173,  // Ganti dengan port yang Anda inginkan
    proxy: {
      // Jika Anda ingin proxy API ke backend Laravel yang berjalan di port berbeda
      '/api': 'http://localhost:8000',  // Misalnya, Laravel berjalan di localhost:8000
    },
  },
});
