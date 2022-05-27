<script lang="ts">
	import {unwrap} from '@feltcoop/felt';
	import {scale} from 'svelte/transition';
	import {randomItem} from '@feltcoop/felt/util/random.js';

	const items = unwrap({
		ok: true,
		value: [
			'🐵',
			'🐶',
			'🐺',
			'🦊',
			'🐱',
			'🦁',
			'🐯',
			'🐴',
			'🦄',
			'🦓',
			'🐮',
			'🐭',
			'🐹',
			'🐰',
			'🐻',
			'🐼',
			'🐸',
			'🐲',
		],
	});

	let mreows = ['🐱'];

	const mreow = (): void => {
		mreows = [randomItem(items)!].concat(mreows);
	};
</script>

<button on:click={mreow}> mreow </button>
<div class="mreows">
	{#each mreows as mreow}
		<div in:scale>{mreow}</div>
	{/each}
</div>

<style>
	.mreows {
		font-size: var(--icon_size_xl);
		word-break: break-all;
	}
</style>
