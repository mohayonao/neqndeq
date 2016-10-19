"use strict";

var deepEqual = require("deep-equal");

function neqndeq(a, b) {
  if (a === b || isScalar(a) || isScalar(b)) {
    return true;
  }

  if (deepEqual(a, b)) {
    return false;
  }

  var keys = Object.keys(a);

  for (var j = 0, jmax = keys.length; j < jmax; j++) {
    if (!neqndeq(a[keys[j]], b[keys[j]])) {
      return false;
    }
  }

  return true;
}

function isScalar(a) {
  return !a || typeof a !== "object";
}

module.exports = neqndeq;
