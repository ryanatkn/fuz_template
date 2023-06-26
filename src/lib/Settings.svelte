<script lang="ts">
	import {defaultThemes} from '@feltjs/felt-ui/themes.js';
	import ColorSchemeInput from '@feltjs/felt-ui/ColorSchemeInput.svelte';
	import ThemeInput from '@feltjs/felt-ui/ThemeInput.svelte';
</script>

<div class="prose padded_xl box">
	<h1>Settings</h1>
	<h2>Color Scheme</h2>
	<ColorSchemeInput />
	<h2>Theme</h2>
	<ThemeInput themes={defaultThemes} enableEditing={false} />
</div>
