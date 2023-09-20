//@ts-expect-error
import {typescript} from 'svelte-preprocess-esbuild';
import adapter from '@sveltejs/adapter-static';

// const dev = process.argv.includes('dev'); // see below

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	compilerOptions: {immutable: true},
	vitePlugin: {inspector: true}, // docs: https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
	kit: {
		adapter: adapter(),
		// `base` is for non-root domains like the default GitHub Pages
		// username.github.io/repo - delete these comments for top-level domains
		// paths: dev ? undefined : {base: '/felt-template'},
		files: {assets: 'src/static'},
		alias: {$routes: 'src/routes'},
	},
};
