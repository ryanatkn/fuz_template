<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Header from '$routes/Header.svelte';
</script>

<main class="prose">
	<section class="box">
		<Header />
		<p>this is an example route</p>
		<Breadcrumb>🏠</Breadcrumb>
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
