import { expect } from 'chai';

export const equal = (expected, output) {
  return function() {
    expect(output).to.deep.equal(expected)
  }
}
