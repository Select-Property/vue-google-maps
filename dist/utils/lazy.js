"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lazy;
function lazy(fn) {
  var called = false;
  var ret = void 0;

  return function () {
    if (!called) {
      called = true;
      ret = fn();
    }

    return ret;
  };
}