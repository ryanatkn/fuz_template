/**
 * This package can be published to npm with `gro publish` you install
 * SvelteKit's `svelte-package` with `npm i -D @sveltejs/package`.
 * @see https://github.com/grogarden/gro/blob/main/src/lib/docs/publish.md
 * @see https://kit.svelte.dev/docs/packaging
 */
export const example_variable = 5;

export const example_function = (): boolean => true;

export class Example_Class {
	a = example_variable;
	b = example_function;
}

export type Example_Type = 'example_type_1' | 'example_type_2';
