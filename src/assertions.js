import { expect } from 'chai';

export const equal = (expected, output) => {
  expect(output).to.deep.equal(expected);
}

export const notEqual = (expected, output) => {
  expect(output).to.not.deep.equal(expected);
}
