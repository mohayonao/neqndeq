"use strict";

require("run-with-mocha");

const assert = require("assert");
const neqndeq = require("..");

describe("neqndeq", () => {
  describe("scalar", () => {
    it("should be true  when A is B", () => {
      assert(neqndeq(1, 1) === true);
    });

    it("should be true  when A is not B, even so", () => {
      assert(neqndeq(1, 2) === true);
    });
  });

  describe("object", () => {
    it("should be true  when A is B", () => {
      const a = { x: 100, y: [ 200, 300, [ 400 ] ], z: { value: 500 } };
      const b = a;

      assert(neqndeq(a, b) === true);
    });

    it("should be true  when shallow copied object but that includes changed value", () => {
      const a = { x: 100, y: [ 200, 300, [ 400 ] ], z: { value: 500 } };
      const b = { x: a.x, y: [ 200, 305, a.y[2]  ], z: a.z };

      assert(neqndeq(a, b) === true);
    });

    it("should be false when includes elements that deep equal test passing", () => {
      const a = { x: 100, y: [ 200, 300, [ 400 ] ], z: { value: 500 } };
      const b = { x: a.x, y: [ 200, 305, [ 400 ] ], z: a.z };

      b.y = [ 200, 305, [ 400 ] ];

      assert(neqndeq(a, b) === false);
    });
  });
});
