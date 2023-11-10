/**
 * usage: `npm test` or `gro test`
 * @see https://github.com/lukeed/uvu
 * @see https://github.com/grogarden/gro/blob/main/src/lib/docs/test.md
 */

import {test} from 'uvu';
import * as assert from 'uvu/assert';

import {example_variable} from '$lib/example';

test('everything looks good', () => {
	assert.is(example_variable, 5);
});

test.run();
