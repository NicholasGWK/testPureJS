import { test, testSuite, runTests } from '../src/test'
import { equal, notEqual } from '../src/assertions.js';


const pureFn = val => val;

const tests = [
    test('Equal should work', pureFn, 12, 12, equal),
    test('Not Equal should work', pureFn, 12, 13, notEqual),
];

runTests(testSuite('All my tests', tests));
