export const test = (name, fn, input, expected, assertion) => {
  const output = fn(input);
  return () => {
    it(name, () => {
      assertion(expected, output);
    });
  };
};

export const suite = (name, tests) => {
  return () => {
    describe(name, () => {
      runTests(tests);
    });
  };
};

export const runTests = tests => {
  if (Array.isArray(tests)) {
    tests.forEach(currTest => {
      currTest();
    });
  } else {
    tests();
  }
};
