import {typescript} from 'svelte-preprocess-esbuild';
import static_adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV !== 'production';

// TODO import from gro
const to_package_repo_name = (pkg) =>
	pkg.name.includes('/') ? pkg.name.split('/').slice(1).join('/') : pkg.name;
const to_sveltekit_base_path = (pkg, dev) => (dev ? '' : `/${to_package_repo_name(pkg)}`);

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	kit: {
		adapter: static_adapter(),
		target: '#svelte',
		paths: {base: to_sveltekit_base_path(pkg, dev)},
		appDir: 'app', // because _app is ignored by GitHub pages by default
		files: {assets: 'src/static'},
	},
};
