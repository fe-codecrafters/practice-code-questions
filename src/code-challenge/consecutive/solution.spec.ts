import { expect, test, describe } from "vitest";
import { solution } from "./solution";

describe("", () => {
  test("Simple consecutive examples", () => {
    expect(solution([1, 2, 3, 4])).toBe(0);
    expect(solution([2, 5])).toBe(2);
    expect(solution([0, 3])).toBe(2);
    expect(solution([5, 12, 15, 17, 18, 22])).toBe(12);
    expect(solution([1, 5, 9, 10, 11, 12, 14])).toBe(7);
  });

  test("unsorted consecutive examples", () => {
    expect(solution([1, 23, 5])).toBe(20);
    expect(solution([100, 105, 110])).toBe(8);
  });

  test("unsorted consecutive examples with negative integer", () => {
    expect(solution([-4, -3, 5])).toBe(7);
    expect(solution([-4, 10])).toBe(13);
  });
});
