import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Default options are shown here. Customize as necessary.
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
