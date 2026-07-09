import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		preprocessorOptions: {
			scss: {
				// The @import rule still works but is deprecated in Dart Sass;
				// silence the warning until the stylesheets migrate to @use.
				silenceDeprecations: ['import'],
			},
		},
	},
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: 'build',
	},
});
