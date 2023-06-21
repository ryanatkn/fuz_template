<script lang="ts">
	import ContextmenuEntry from '@feltjs/felt-ui/ContextmenuEntry.svelte';
	import {type ColorScheme, syncColorScheme} from '@feltjs/felt-ui/theme.js';
	import type {Writable} from 'svelte/store';

	export let colorScheme: Writable<ColorScheme | null>;

	// TODO BLOCK show selected
</script>

{#if $colorScheme === 'auto'}
	<li class="menu_item plain selectable selected" role="none">color scheme: 'auto'</li>
{:else}
	<ContextmenuEntry
		run={() => {
			$colorScheme = 'auto';
			syncColorScheme('auto');
		}}
	>
		<svelte:fragment slot="icon">⚘</svelte:fragment>
		color scheme: 'auto'
	</ContextmenuEntry>
{/if}
{#if $colorScheme === 'dark'}
	<li class="menu_item plain selectable selected" role="none">color scheme: 'dark'</li>
{:else}
	<ContextmenuEntry
		run={() => {
			$colorScheme = 'dark';
			syncColorScheme('dark');
		}}
	>
		<svelte:fragment slot="icon">⚘</svelte:fragment>
		color scheme: 'dark'
	</ContextmenuEntry>
{/if}
{#if $colorScheme === 'light'}
	<li class="menu_item plain selectable selected" role="none">color scheme: 'light'</li>
{:else}
	<ContextmenuEntry
		run={() => {
			$colorScheme = 'light';
			syncColorScheme('light');
		}}
	>
		<svelte:fragment slot="icon">⚘</svelte:fragment>
		color scheme: 'light'
	</ContextmenuEntry>
{/if}
