export const test = (name, fn, input, expected, assertion) => {
  return function() {
    const output = fn(input);
    return assertion(expected, output);
  }
}
