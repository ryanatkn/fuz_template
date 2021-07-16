# felt-template

> a static website template with [SvelteKit](https://github.com/sveltejs/kit),
> [Gro](https://github.com/feltcoop/gro), and [Felt](https://github.com/feltcoop/felt)

deployed: <https://feltcoop.github.io/felt-template>

## usage

If you're logged into GitHub, click "Use this template" above or clone with
[`degit`](https://github.com/Rich-Harris/degit):

```bash
npx degit feltcoop/felt-template#main cooltoy
cd cooltoy
npm i
# then
npm run dev
# or
gro dev
```

To make it your own, change `felt-template` to your project name in the following files:

- [`package.json`](package.json)
- [`svelte.config.js`](svelte.config.js)
- [`src/routes/__layout.svelte`](src/routes/__layout.svelte)
- [`src/routes/index.svelte`](src/routes/index.svelte)

Then run `npm i` to update `package-lock.json`.

Optionally add a license file and `package.json` value, like `"license": "MIT"`.

See [SvelteKit](https://github.com/sveltejs/kit)
and [Vite](https://github.com/vitejs/vite) for more.

## build

```bash
npm run build
# or
gro build
```

## deploy

[Deploy the static frontend](https://github.com/feltcoop/gro/blob/main/src/docs/deploy.md)
to the `deploy` branch, e.g. for GitHub Pages:

```bash
npm run deploy
# or
gro deploy
```

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[Gro](https://github.com/feltcoop/gro) ∙
[Felt](https://github.com/feltcoop/felt) ∙
[Rollup](https://github.com/rollup/rollup) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[@lukeed\/\*](https://github.com/lukeed)
& [more](package.json)

## [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)
