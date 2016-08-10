import { test, suite, runTests } from '../src/test';
import { equal, notEqual } from '../src/assertions.js';
import { createTestsFromParts } from '../src/helpers.js';

const pureFn = val => val;

const tests = [
  test('Equal should work', pureFn, 12, 12, equal),
  test('Not Equal should work', pureFn, 12, 13, notEqual),
];

runTests(suite('All my tests', tests));


const fns = { first: pureFn, second: pureFn };
const inputs = { first: 12, second: 12 };
const expected = { first: 12, second: 13 };
const assertions = { first: equal, second: notEqual };

const tests2 = createTestsFromParts({ fns, inputs, expected, assertions });
runTests(suite('Testing helpers', tests2));
