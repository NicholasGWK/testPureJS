// Has helpers so you can do things like pass all the inputs, outputs, and functions

import { test } from './test';
import R from 'ramda';

export const createTestsFromCollection = testCollection => {
  if (Array.isArray(testCollection)) {
    return createTestsFromArray(testCollection);
  }
  return createTestsFromObject(testCollection);
};

const createTestsFromArray = testCollection => {
  return testCollection.map(testObj => {
    const { name, fn, input, expected, assertion } = testObj;
    return test(name, fn, input, expected, assertion);
  });
};

const createTestsFromObject = testCollection => {
  const tests = R.values(R.mapObjIndexed((testObj, name) => {
    const { fn, input, expected, assertion } = testObj;
    return test(name, fn, input, expected, assertion);
  }, testCollection));
  return tests;
};

export const createTestsFromParts = parts => {
  const { fns, inputs, expected, assertions } = parts;
  const mappedTogether = R.mapObjIndexed((fn, name) => {
    const input = inputs[name];
    const expect = expected[name];
    const assertion = assertions[name];

    return { name, fn, input, expected: expect, assertion };
  }, fns);
  return createTestsFromObject(mappedTogether);
};
