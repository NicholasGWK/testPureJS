export const test = (name, fn, input, expected, assertion) => {
    const output = fn(input);
    return () => {
      it(name, () => {
        assertion(expected, output);
      });
  }
}

export const testSuite = (name, tests) => {
    return () => {
      describe(name, () => {
        runTests(tests);
    });
  };
};

export const runTests = tests => {
  if(Array.isArray(tests)) {
  tests.forEach(test => {
    test();
  });
} else {
  tests();
}
};
