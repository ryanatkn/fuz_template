const {typescript} = require('svelte-preprocess-esbuild');
const staticAdapter = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

const dev = process.env.NODE_ENV !== 'production';

// TODO extract to gro
const toPackageRepoName = (pkg) =>
	pkg.name.includes('/') ? pkg.name.split('/').slice(1).join('/') : pkg.name;
const toSvelteKitBasePath = (pkg, dev) => (dev ? '' : `/${toPackageRepoName(pkg)}`);

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: typescript(),
	kit: {
		adapter: staticAdapter(),

		appDir: 'app', // because _app is ignored by GitHub pages by default
		paths: {base: toSvelteKitBasePath(pkg, dev)},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {}),
			},
		},
	},
};
