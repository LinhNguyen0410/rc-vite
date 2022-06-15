import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
  },
  envDir: './env',
  envPrefix: 'RC',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/public/assets'),
    },
  },
});
