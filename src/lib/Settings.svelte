<script lang="ts">
	import {writable} from 'svelte/store';
	import {
		getTheme,
		saveTheme,
		type ColorScheme,
		type Theme,
		loadColorScheme,
	} from '@feltjs/felt-ui/theme.js';
	import {defaultThemes} from '@feltjs/felt-ui/themes.js';
	import ColorSchemeInput from '@feltjs/felt-ui/ColorSchemeInput.svelte';
	import ThemeInput from '@feltjs/felt-ui/ThemeInput.svelte';

	const colorScheme = writable<ColorScheme | null>(loadColorScheme());

	const selectedTheme = getTheme();

	const selectTheme = (theme: Theme): void => {
		$selectedTheme = theme;
		saveTheme(theme);
	};

	// TODO BLOCK fix
</script>

<div class="prose padded_xl box">
	<h1>Settings</h1>
	<h2>Color Scheme</h2>
	<ColorSchemeInput {colorScheme} />
	<h2>Theme</h2>
	<ThemeInput
		{selectedTheme}
		themes={defaultThemes}
		enableEditing={false}
		on:select={(e) => selectTheme(e.detail)}
	/>
</div>
