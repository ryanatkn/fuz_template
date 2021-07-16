<script lang="ts">
	import Markup from '@feltcoop/felt/ui/Markup.svelte';

	import Mreows from '$lib/ui/Mreows.svelte';
</script>

<main class="column">
	<Markup>
		<h1>felt-template</h1>
		<Mreows />
	</Markup>
</main>

<style>
	main {
		text-align: center;
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
