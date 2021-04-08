<script lang="ts">
	import Mreows from '$lib/Mreows.svelte';
</script>

<main>
	<h1>kitty</h1>
	1
	<Mreows />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: lowercase;
		font-size: 4rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
