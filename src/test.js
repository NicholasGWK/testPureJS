export const test = (name, fn, input, expected, assertion) => {
    const output = fn(input);
    assertion(expected, output);
}
