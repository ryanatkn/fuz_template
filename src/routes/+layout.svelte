<script lang="ts">
	import '@feltjs/felt-ui/style.css';
	import '@feltjs/felt-ui/theme.css';
	import '$routes/style.css';

	import Themed from '@feltjs/felt-ui/Themed.svelte';
	import Dialog from '@feltjs/felt-ui/Dialog.svelte';
	import Contextmenu from '@feltjs/felt-ui/Contextmenu.svelte';
	import {createContextmenu} from '@feltjs/felt-ui/contextmenu.js';

	import Settings from '$routes/Settings.svelte';

	const contextmenu = createContextmenu();

	let showSettings = false;
</script>

<svelte:head>
	<title>felt-template</title>
</svelte:head>

<svelte:body
	use:contextmenu.action={[
		{
			content: 'Settings',
			icon: '?',
			run: () => {
				showSettings = true;
			},
		},
		{
			content: 'Reload',
			icon: '⟳',
			run: () => {
				location.reload();
			},
		},
	]}
/>

<Themed>
	<slot />
	<Contextmenu {contextmenu} />
	{#if showSettings}
		<Dialog on:close={() => (showSettings = false)}>
			<div class="pane">
				<Settings />
			</div>
		</Dialog>
	{/if}
</Themed>
