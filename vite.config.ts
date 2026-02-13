import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: fileURLToPath(new URL('./src/features/app', import.meta.url)),
      pages: fileURLToPath(new URL('./src/features/pages', import.meta.url)),
      shared: fileURLToPath(new URL('./src/features/shared', import.meta.url)),
      widgets: fileURLToPath(new URL('./src/features/widgets', import.meta.url)),
    },
  },
});
