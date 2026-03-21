import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			features: fileURLToPath(new URL('./src/features', import.meta.url)),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
	},
});
