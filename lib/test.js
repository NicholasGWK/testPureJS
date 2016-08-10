"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var test = exports.test = function test(name, fn, input, expected, assertion) {
  var output = fn(input);
  return function () {
    it(name, function () {
      assertion(expected, output);
    });
  };
};

var suite = exports.suite = function suite(name, tests) {
  return function () {
    describe(name, function () {
      runTests(tests);
    });
  };
};

var runTests = exports.runTests = function runTests(tests) {
  if (Array.isArray(tests)) {
    tests.forEach(function (test) {
      test();
    });
  } else {
    tests();
  }
};