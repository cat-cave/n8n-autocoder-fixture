import test from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greet.js";

test("greet('world') returns 'Hello, world!'", () => {
  assert.equal(greet("world"), "Hello, world!");
});

test("greet('') returns 'Hello, !'", () => {
  assert.equal(greet(""), "Hello, !");
});
