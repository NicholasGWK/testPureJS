'use strict';

var testHelpers = require('./test');
var assertions = require('./assertions');

module.exports = {
  runTests: testHelpers.runTests,
  test: testHelpers.test,
  suite: testHelpers.suite,
  assertions: assertions
};