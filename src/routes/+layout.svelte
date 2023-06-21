<script lang="ts">
	import '@feltjs/felt-ui/style.css';
	import '@feltjs/felt-ui/theme.css';
	import '$routes/style.css';

	import {writable} from 'svelte/store';
	import {loadTheme, type ColorScheme, loadColorScheme} from '@feltjs/felt-ui/theme.js';
	import {DEFAULT_THEME, defaultThemes} from '@feltjs/felt-ui/themes.js';
	import Themed from '@feltjs/felt-ui/Themed.svelte';
	import Contextmenu from '@feltjs/felt-ui/Contextmenu.svelte';
	import {createContextmenu, toContextmenuParams} from '@feltjs/felt-ui/contextmenu.js';
	import ContextmenuLinkEntry from '@feltjs/felt-ui/ContextmenuLinkEntry.svelte';
	import ContextmenuTextEntry from '@feltjs/felt-ui/ContextmenuTextEntry.svelte';

	import ThemeContextmenu from '$lib/ThemeContextmenu.svelte';
	import ColorSchemeContextmenu from '$lib/ColorSchemeContextmenu.svelte';

	// Setup the UI theme.
	const loadedTheme = loadTheme();
	// TODO hacky remove this when adding runtime theme editing
	const loadedThemeDefaultRef =
		loadedTheme && defaultThemes.find((t) => t.name === loadedTheme.name);
	const theme = writable(loadedThemeDefaultRef || loadedTheme || DEFAULT_THEME);

	const colorScheme = writable<ColorScheme | null>(loadColorScheme());

	const contextmenu = createContextmenu({
		linkComponent: ContextmenuLinkEntry,
		textComponent: ContextmenuTextEntry,
	});
</script>

<svelte:head>
	<title>felt-template</title>
</svelte:head>

<Themed {theme}>
	<div
		use:contextmenu.action={[
			toContextmenuParams(ThemeContextmenu, {theme}),
			toContextmenuParams(ColorSchemeContextmenu, {colorScheme}),
		]}
	>
		<slot />
	</div>
	<Contextmenu {contextmenu} />
</Themed>
