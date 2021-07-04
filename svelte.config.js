import {typescript} from 'svelte-preprocess-esbuild';
import static_adapter from '@sveltejs/adapter-static';
import {readFileSync} from 'fs';

const dev = process.env.NODE_ENV !== 'production';
const pkg = JSON.parse(readFileSync('package.json', 'utf8'));

// TODO import from gro
const to_sveltekit_base_path = (pkg, dev) => (dev ? '' : `/${to_package_repo_name(pkg)}`);
const to_package_repo_name = (pkg) =>
	pkg.name.includes('/') ? pkg.name.split('/').slice(1).join('/') : pkg.name;

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	kit: {
		adapter: static_adapter(),
		target: '#svelte',
		paths: {base: to_sveltekit_base_path(pkg, dev)},
		appDir: 'app', // because _app is ignored by GitHub pages by default
		files: {assets: 'src/static'},
		vite: {
			ssr: {
				noExternal: ['@feltcoop/felt'],
			},
			optimizeDeps: {
				exclude: ['@feltcoop/felt'],
			},
		},
	},
};
