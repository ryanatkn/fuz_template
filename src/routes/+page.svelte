<script lang="ts">
	import Message from '@feltjs/felt-ui/Message.svelte';
	import {base} from '$app/paths';

	import Header from '$routes/Header.svelte';
	import Mreows from '$routes/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined;
</script>

<main class="prose">
	<section class="box">
		<Header />
		<Message>
			<span slot="icon"
				>{#if mreows}{mreows[0].icon}{:else}✨{/if}</span
			><span
				>hello, welcome to <a href="https://github.com/feltjs/felt-template">felt-template</a></span
			>
		</Message>
		<p>
			here's an <a href="{base}/route">example route</a>
		</p>
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
