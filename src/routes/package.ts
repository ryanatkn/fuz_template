// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_template',
	version: '0.0.1',
	description:
		'a static web app and Node library template with TypeScript, Svelte, SvelteKit, Vite, esbuild, Fuz, and Gro',
	icon: '❄',
	public: true,
	homepage: 'https://template.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_template',
	type: 'module',
	engines: {node: '>=20.10'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	devDependencies: {
		'@ryanatkn/belt': '^0.20.9',
		'@ryanatkn/eslint-config': '^0.1.0',
		'@ryanatkn/fuz': '^0.91.5',
		'@ryanatkn/gro': '^0.112.5',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.4',
		'@sveltejs/vite-plugin-svelte': '^3.0.2',
		'@typescript-eslint/eslint-plugin': '^7.3.1',
		'@typescript-eslint/parser': '^7.3.1',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.2',
		svelte: '^4.2.12',
		'svelte-check': '^3.6.8',
		tslib: '^2.6.2',
		typescript: '^5.4.3',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
} satisfies Package_Json;

export const src_json = {name: '@ryanatkn/fuz_template', version: '0.0.1'} satisfies Src_Json;

// generated by src/routes/package.gen.ts
