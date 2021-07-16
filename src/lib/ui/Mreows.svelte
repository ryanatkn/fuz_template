<script lang="ts">
	import {icons} from '@feltcoop/felt';
	import {random_item} from '@feltcoop/felt/util/random.js';

	const items: string[] = Object.values(icons);

	let mreows = ['🐱'];

	const mreow = (): void => {
		mreows = mreows.concat(random_item(items)!);
	};
</script>

<button on:click={mreow}> mreow </button>
<div class="mreows">
	{mreows.join('')}
</div>

<style>
	.mreows {
		font-size: 128px;
	}
</style>
