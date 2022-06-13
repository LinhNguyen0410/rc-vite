import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  envDir: './env',
  envPrefix: 'rc',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/public/assets'),
    },
  },
});
