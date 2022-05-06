const { expect, toBe } = require("expect");
// import { toBe } from "jest";
const sum = require("./sum");

test("expect sum of 1 + 2 to be 3", () => {
  expect(sum(1, 2)).toBe(3);
});
