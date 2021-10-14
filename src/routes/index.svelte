<script lang="ts">
	import Message from '@feltcoop/felt/ui/Message.svelte';

	import Mreows from '$lib/ui/Mreows.svelte';
</script>

<main class="column markup">
	<section class="column-min">
		<h1>felt-template</h1>
		<Message>hello and welcome</Message>
	</section>
	<Mreows />
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
