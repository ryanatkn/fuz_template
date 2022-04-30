<script lang="ts">
	import Message from '@feltcoop/felt/ui/Message.svelte';

	import Mreows from '$lib/Mreows.svelte';
</script>

<main class="markup column">
	<section class="column-sm">
		<h1>felt-template</h1>
		<Message
			><span
				>hello, welcome to <a href="https://github.com/feltcoop/felt-template">felt-template</a
				></span
			></Message
		>
	</section>
	<Mreows />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		text-align: center;
	}
</style>
