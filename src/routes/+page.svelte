<script lang="ts">
	import Card from '@ryanatkn/fuz/Card.svelte';
	import {base} from '$app/paths';
	import {random_item} from '@ryanatkn/belt/random.js';

	import Mreows, {items} from '$routes/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined = $state([random_item(items), items[4]]);
</script>

<main>
	<section class="box">
		<header>
			<h1 class="mt_xl2">fuz_template</h1>
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
