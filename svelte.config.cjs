const {typescript} = require('svelte-preprocess-esbuild');
const staticAdapter = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: typescript(),
	kit: {
		adapter: staticAdapter(),

		paths: {
			// TODO derive from `package.json`, stripping namespace as necessary
			base: process.env.NODE_ENV === 'production' ? '/kitty' : '',
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {}),
			},
		},
	},
};
