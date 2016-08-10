'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTestsFromParts = exports.createTestsFromCollection = undefined;

var _test = require('./test');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Has helpers so you can do things like pass all the inputs, outputs, and functions

var createTestsFromCollection = exports.createTestsFromCollection = function createTestsFromCollection(testCollection) {
  if (Array.isArray(testCollection)) {
    return createTestsFromArray(testCollection);
  }
  return createTestsFromObject(testCollection);
};

var createTestsFromArray = function createTestsFromArray(testCollection) {
  return testCollection.map(function (testObj) {
    var name = testObj.name;
    var fn = testObj.fn;
    var input = testObj.input;
    var expected = testObj.expected;
    var assertion = testObj.assertion;

    return (0, _test.test)(name, fn, input, expected, assertion);
  });
};

var createTestsFromObject = function createTestsFromObject(testCollection) {
  var tests = _ramda2.default.values(_ramda2.default.mapObjIndexed(function (testObj, name) {
    var fn = testObj.fn;
    var input = testObj.input;
    var expected = testObj.expected;
    var assertion = testObj.assertion;

    return (0, _test.test)(name, fn, input, expected, assertion);
  }, testCollection));
  return tests;
};

var createTestsFromParts = exports.createTestsFromParts = function createTestsFromParts(parts) {
  var fns = parts.fns;
  var inputs = parts.inputs;
  var expected = parts.expected;
  var assertions = parts.assertions;

  var mappedTogether = _ramda2.default.mapObjIndexed(function (fn, name) {
    var input = inputs[name];
    var expect = expected[name];
    var assertion = assertions[name];

    return { name: name, fn: fn, input: input, expected: expect, assertion: assertion };
  }, fns);
  return createTestsFromObject(mappedTogether);
};