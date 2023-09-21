<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import Dialog from '@fuz.dev/fuz/Dialog.svelte';
	import Contextmenu from '@fuz.dev/fuz/Contextmenu.svelte';
	import {createContextmenu} from '@fuz.dev/fuz/contextmenu.js';

	import Settings from '$routes/Settings.svelte';

	const contextmenu = createContextmenu();

	let showSettings = false;
</script>

<svelte:head>
	<title>@fuz.dev/template</title>
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
