<script lang="ts">
	import '@feltjs/felt-ui/style.css';
	import '@feltjs/felt-ui/theme.css';
	import '$routes/style.css';

	import {writable} from 'svelte/store';
	import {loadTheme} from '@feltjs/felt-ui/theme.js';
	import {DEFAULT_THEME, defaultThemes} from '@feltjs/felt-ui/themes.js';
	import Themed from '@feltjs/felt-ui/Themed.svelte';
	import Dialog from '@feltjs/felt-ui/Dialog.svelte';
	import Contextmenu from '@feltjs/felt-ui/Contextmenu.svelte';
	import {createContextmenu} from '@feltjs/felt-ui/contextmenu.js';
	import ContextmenuLinkEntry from '@feltjs/felt-ui/ContextmenuLinkEntry.svelte';
	import ContextmenuTextEntry from '@feltjs/felt-ui/ContextmenuTextEntry.svelte';

	import Settings from '$lib/Settings.svelte';

	// Setup the UI theme.
	const loadedTheme = loadTheme();
	// TODO hacky remove this when adding runtime theme editing
	const loadedThemeDefaultRef =
		loadedTheme && defaultThemes.find((t) => t.name === loadedTheme.name);
	const theme = writable(loadedThemeDefaultRef || loadedTheme || DEFAULT_THEME);

	const contextmenu = createContextmenu({
		linkComponent: ContextmenuLinkEntry,
		textComponent: ContextmenuTextEntry,
	});

	let showSettings = false;
</script>

<svelte:head>
	<title>felt-template</title>
</svelte:head>

<Themed {theme}>
	<div
		use:contextmenu.action={{
			content: 'Settings',
			icon: '?',
			run: () => {
				showSettings = true;
			},
		}}
	>
		<slot />
	</div>
	<Contextmenu {contextmenu} />
	{#if showSettings}
		<Dialog on:close={() => (showSettings = false)}>
			<Settings />
		</Dialog>
	{/if}
</Themed>
