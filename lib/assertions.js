'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notEqual = exports.equal = undefined;

var _chai = require('chai');

var equal = exports.equal = function equal(expected, output) {
  (0, _chai.expect)(output).to.deep.equal(expected);
};

var notEqual = exports.notEqual = function notEqual(expected, output) {
  (0, _chai.expect)(output).to.not.deep.equal(expected);
};