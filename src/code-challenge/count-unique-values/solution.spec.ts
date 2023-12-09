import { expect, test, describe } from "bun:test";
import { solution } from "./solution";

describe("", () => {
  test("", () => {
    expect(solution([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(solution([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(solution([])).toBe(0);
    expect(solution([-2, -1, -1, 0, 1])).toBe(4);
  });
});
