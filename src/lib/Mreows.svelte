<script lang="ts">
	import {unwrap} from '@feltcoop/felt';
	import {scale} from 'svelte/transition';
	import {randomItem} from '@feltcoop/felt/util/random.js';

	const items = unwrap({
		ok: true,
		value: [
			{icon: '🐵'},
			{icon: '🐶'},
			{icon: '🐺'},
			{icon: '🦊'},
			{icon: '🐱'},
			{icon: '🦁'},
			{icon: '🐯'},
			{icon: '🐴'},
			{icon: '🦄'},
			{icon: '🦓'},
			{icon: '🐮'},
			{icon: '🐭'},
			{icon: '🐹'},
			{icon: '🐰'},
			{icon: '🐻'},
			{icon: '🐼'},
			{icon: '🐸'},
			{icon: '🐲'},
		],
	});

	let mreows = [items[4]];

	const mreow = (): void => {
		mreows = [{...randomItem(items)!}].concat(mreows);
	};
</script>

<button on:click={mreow}> mreow </button>
<div class="mreows">
	{#each mreows as mreow (mreow)}
		<div in:scale>{mreow.icon}</div>
	{/each}
</div>

<style>
	.mreows {
		display: flex;
		flex-wrap: wrap;
		font-size: var(--icon_size_xl);
	}
</style>
