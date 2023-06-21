<script lang="ts">
	import ContextmenuEntry from '@feltjs/felt-ui/ContextmenuEntry.svelte';
	import type {Theme} from '@feltjs/felt-ui/theme.js';
	import {defaultThemes} from '@feltjs/felt-ui/themes.js';
	import type {Writable} from 'svelte/store';

	export let theme: Writable<Theme>;
	export let themes: Theme[] = defaultThemes;

	// TODO BLOCK show selected
	// TODO BLOCK do we need dialogs? open the about dialog with theme controls?
</script>

{#each themes as t (t.name)}
	<ContextmenuEntry
		run={() => {
			$theme = t;
		}}
	>
		<svelte:fragment slot="icon">⚘</svelte:fragment>
		select theme: {t.name}
	</ContextmenuEntry>
{/each}
