const testHelpers = require('./test');
const assertions = require('./assertions');

module.exports = {
  runTests: testHelpers.runTests,
  test: testHelpers.test,
  suite: testHelpers.suite,
  assertions: assertions,
};
