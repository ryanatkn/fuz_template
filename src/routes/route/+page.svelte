<script lang="ts">
	import Breadcrumbs from '@fuz.dev/fuz/Breadcrumbs.svelte';

	import Header from '$routes/Header.svelte';
</script>

<main class="prose">
	<section class="box">
		<Header />
		<p>this is an example route</p>
		<Breadcrumbs>🏠</Breadcrumbs>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
