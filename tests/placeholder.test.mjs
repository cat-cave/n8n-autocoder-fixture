// Placeholder test so the GHA `test` job is green on `main` BEFORE the
// autocoder produces real changes. Once B-0002 lands tests/greet.test.ts,
// this file can stay as a sanity floor (it's independent of greet).
//
// Uses .mjs so Node 20 (the GHA pin) can run it directly with `node --test`
// without --experimental-strip-types. The autocoder's B-0002 will add a
// matching tests/greet.test.{ts,mjs} for the real assertion set.
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('fixture repo is reachable and node:test runs', () => {
	assert.equal(1 + 1, 2);
});
