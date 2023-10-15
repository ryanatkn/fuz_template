import {vitePreprocess} from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	compilerOptions: {immutable: true},
	vitePlugin: {inspector: true}, // docs: https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
	kit: {
		adapter: adapter(),
		// this is for non-root domains like the default GitHub Pages
		// `username.github.io/repo` where `repo` is `base` -
		// delete these comments for top-level domains
		// paths: import.meta.env.DEV ? undefined : {base: '/template'},
		alias: {$routes: 'src/routes', $fixtures: 'src/fixtures'},
	},
};
