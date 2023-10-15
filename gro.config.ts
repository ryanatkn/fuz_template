import {type CreateGroConfig, replace_plugin} from '@grogarden/gro';

const config: CreateGroConfig = async (cfg) => {
	// This template's `package.json` has `"private": true` to protect users,
	// disabling `.well-known/package.json`, but in this case we want to publish it,
	// so we re-enable it here.
	// This entire config file can be deleted for projects that want the normal defaults.
	// @see https://github.com/grogarden/gro/blob/main/src/lib/docs/config.md#when-updating_well_known
	const get_base_plugins = cfg.plugins;
	cfg.plugins = async (ctx) =>
		replace_plugin(
			await get_base_plugins(ctx),
			(await import('@grogarden/gro/gro_plugin_sveltekit_frontend.js')).plugin({
				well_known_package_json: true, // TODO BLOCK test mapping and false and undefined
			}),
		);

	return cfg;
};

export default config;
