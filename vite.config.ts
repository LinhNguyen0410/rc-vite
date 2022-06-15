import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  server: {
    port: 3000,
    open: true,
  },
  envDir: './env',
  envPrefix: 'RC',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/public/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
