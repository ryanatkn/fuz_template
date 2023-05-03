# felt-template

> a static web app and Node library template with [Svelte](https://github.com/sveltejs/svelte),
> [SvelteKit](https://github.com/sveltejs/kit),
> [felt-ui](https://github.com/feltjs/felt-ui),
> and [Gro](https://github.com/feltjs/gro)

deployed:
[template.felt.dev](https://template.felt.dev/)

## contents

- [SvelteKit](https://github.com/sveltejs/kit) with [Svelte](https://github.com/sveltejs/svelte) and
  [Vite](https://github.com/vitejs/vite)
- [Gro](https://github.com/feltjs/gro):
  - extends [SvelteKit](https://github.com/sveltejs/kit) and
    [Vite](https://github.com/vitejs/vite)
  - integrated [TypeScript](https://github.com/microsoft/TypeScript)
    with [Svelte](https://github.com/sveltejs/svelte) and
    [svelte-check](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)
  - testing with [uvu](https://github.com/lukeed/uvu)
  - formatting with [Prettier](https://github.com/prettier/prettier)
  - linting with [ESLint](https://github.com/eslint/eslint)
    and [`@feltjs/eslint-config`](https://github.com/feltjs/eslint-config)
  - also has [a task system](https://github.com/feltjs/gro/blob/main/src/docs/task.md)
    with a bunch of [builtins](https://github.com/feltjs/gro/blob/main/src/docs/tasks.md),
    [codegen](https://github.com/feltjs/gro/blob/main/src/docs/gen.md),
    and [other things](https://github.com/feltjs/gro/tree/main/src/docs)
- [felt-ui](https://github.com/feltjs/felt-ui):
  - a [package](https://github.com/feltjs/felt-ui/blob/main/src/gro.config.ts)
    with Svelte [UI components](https://www.felt.dev/sketch/library) and
    [styles](https://github.com/feltjs/felt-ui/blob/main/src/lib/style.css)
  - optional [utilities library](https://github.com/feltjs/util)
  - docs and more at [felt.dev](https://www.felt.dev/)
  - to remove it, `npm uninstall @feltjs/felt-ui` and delete the imports

## usage

This project uses [SvelteKit](https://kit.svelte.dev/) with the static adapter
and [Vite](https://vitejs.dev/),
so the normal commands like `vite dev` work as expected.
It also uses [`gro`](https://github.com/feltjs/gro)
for additional things like deploying - see below for more.

> [Windows is not yet supported](https://github.com/feltjs/felt-template/issues/4)
> (we recommend [WSL](https://docs.microsoft.com/en-us/windows/wsl/about))

If you're logged into GitHub, click "Use this template" above or clone with
[`degit`](https://github.com/Rich-Harris/degit):

```bash
npx degit feltjs/felt-template cooltoy
cd cooltoy
npm i
# then
vite dev
# or
gro dev # npm i -g @feltjs/gro
# or
npm run dev
```

> learn more about [SvelteKit](https://github.com/sveltejs/kit),
> [Vite](https://github.com/vitejs/vite), [Gro](https://github.com/feltjs/gro),
> and [felt-ui](https://github.com/feltjs/felt-ui)

The template includes
[`@sveltejs/adapter-static`](https://github.com/sveltejs/kit/tree/master/packages/adapter-static)
so it can [deploy](https://github.com/feltjs/gro/blob/main/src/docs/deploy.md)
with no further configuration.
To learn how to swap it out for another deployment target, see
[the SvelteKit adapter docs](https://kit.svelte.dev/docs#adapters).

To make it your own, change `felt-template` and `template.felt.dev`
to your project name in the following files:

- [`package.json`](package.json)
- [`svelte.config.js`](svelte.config.js)
- [`src/routes/+layout.svelte`](src/routes/+layout.svelte)
- [`src/routes/+page.svelte`](src/routes/+page.svelte)
- update or delete [`src/static/CNAME`](src/static/CNAME)

Then run `npm i` to update `package-lock.json`.

Optionally add a [license file](https://choosealicense.com/)
and [`package.json` value](https://spdx.org/licenses/), like `"license": "MIT"`.

## build

```bash
npm run build
# or
gro build
```

See [Gro's build docs](https://github.com/feltjs/gro/blob/main/src/docs/build.md) for more.

## test

```bash
gro test
gro test filepattern1 filepatternB
gro test -- uvu --forwarded_args 'to uvu'
```

See [uvu](https://github.com/lukeed/uvu),
[`src/lib/example.test.ts`](src/lib/example.test.ts),
and [Gro's test docs](https://github.com/feltjs/gro/blob/main/src/docs/test.md) for more.

## deploy

[Deploy](https://github.com/feltjs/gro/blob/main/src/docs/deploy.md)
(build, commit, and push) to the `deploy` branch, e.g. for GitHub Pages:

```bash
npm run deploy
# or
gro deploy
```

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[uvu](https://github.com/lukeed/uvu) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[ESLint](https://github.com/eslint/eslint) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[felt-ui](https://github.com/feltjs/felt-ui) ∙
[@feltjs/util](https://github.com/feltjs/util) ∙
[Gro](https://github.com/feltjs/gro)
& [more](package.json)

## [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)
