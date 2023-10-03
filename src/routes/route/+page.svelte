<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package.js';
	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';

	import Header from '$routes/Header.svelte';

	// TODO SvelteKit warns about this but we put `/static` in `/src` because of what it's saying,
	/// maybe change to import as the first item from `packages`
	import package_json from '../../static/.well-known/package.json';
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="box width_full">
	<section class="box prose">
		<Header />
		<p>this is an example route</p>
	</section>
	<section><Breadcrumb>🏠</Breadcrumb></section>
	<div class="box width_sm">
		<section>
			<LibraryHeader {pkg} />
		</section>
		<section>
			<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
		</section>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	section {
		margin-bottom: var(--spacing_3);
	}
</style>
