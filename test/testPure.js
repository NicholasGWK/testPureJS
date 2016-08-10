import { test } from '../src/test'
import { equal, notEqual } from '../src/assertions.js';


describe('Testing the framework', () => {
  const pureFn = val => val;
  it('Should work', () => {
      test('myTest', pureFn, 12, 12, equal);
  });
  it('Should not equal and fail', () => {
    test('myOtherTest', pureFn, 12, 13, notEqual);
  })
});
