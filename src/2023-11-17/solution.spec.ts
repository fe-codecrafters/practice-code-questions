import { expect, test } from "bun:test";
import s from "./solution";

test("[1, 2, 3, 4, 5, 1], 1 => 2", () => {
  expect(s([1, 2, 3, 4, 5, 1], 1)).toBe(2);
});

test("[1, 2, 3, 1, 1, 1], 1 => 4", () => {
  expect(s([1, 2, 3, 1, 1, 1], 1)).toBe(4);
});
