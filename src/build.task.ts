import type {Task} from '@feltcoop/gro/dist/task/task.js';
import {spawnProcess} from '@feltcoop/gro/dist/utils/process.js';
import {move} from '@feltcoop/gro/dist/fs/node.js';
import {clean} from '@feltcoop/gro/dist/fs/clean.js';
import {DIST_DIR, SVELTE_KIT_BUILD_PATH} from '@feltcoop/gro/dist/paths.js';

// TODO this currently moves the output from `build/` to `dist/`,
// but we instead `gro/deploy` should somehow handle the `build/` directory.
// Not sure how. Should be able to integrate SvelteKit with no config, I think.

export const task: Task = {
	description: 'build the project',
	dev: false,
	run: async ({dev, log}): Promise<void> => {
		await spawnProcess('npx', ['svelte-kit', 'build']);
		await clean({dist: true}, log);
		await move(SVELTE_KIT_BUILD_PATH, DIST_DIR);
	},
};
