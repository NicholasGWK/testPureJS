import { test } from '../src/test'
import { equal } from '../src/assertions.js';


describe('Testing the framework', () => {
  it('Should work', () => {
      const pureFn = val => val;
      test('myTest', pureFn, 12, 12, equal)
  });
});
