<script lang="ts">
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {base} from '$app/paths';

	import Mreows from '$routes/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined = $state();
</script>

<main class="prose">
	<section class="box">
		<header class="prose">
			<h1 class="mt_xl">fuz_template</h1>
		</header>
		<Card href="{base}/about" icon={mreows ? mreows[0].icon : '✨'}>about</Card>
	</section>
	<Mreows bind:mreows />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
