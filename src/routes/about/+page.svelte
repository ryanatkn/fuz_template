<script lang="ts">
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import {package_json, src_json} from '$routes/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	// TODO standardize
</script>

<main class="width_md">
	<section class="box">
		<header class="box">
			<h1 class="mt_xl2">fuz_template</h1>
		</header>
		<div style:--size="var(--size_xl)">
			<Breadcrumb>{package_json.glyph}</Breadcrumb>
		</div>
	</section>
	<section class="box w_100 mb_lg">
		<div class="panel p_lg width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<section class="box">
		<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
	section {
		margin-bottom: var(--space_xl5);
	}
</style>
