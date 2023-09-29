import type {GroConfigCreator} from '@grogarden/gro';

const config: GroConfigCreator = async (cfg) => {
	// this template's `package.json` has `"private": true`,
	// which disables the `.well-known/package.json`,
	// so we re-enable it here -
	// @see https://github.com/grogarden/gro/blob/main/src/lib/docs/config.md#when-updating_well_known
	cfg.package_json = (pkg, when) => (when === 'updating_well_known' ? pkg : null);

	return cfg;
};

export default config;
