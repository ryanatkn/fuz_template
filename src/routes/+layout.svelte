<script lang="ts">
	import '@feltcoop/felt/ui/style.css';
	import {base} from '$app/paths';

	import '$lib/style.css';

	export const prerender = true;
</script>

<svelte:head>
	<title>felt-template</title>
	<link rel="icon" href="{base}/favicon.png" />
</svelte:head>

<slot />
