import { expect, test, describe } from "bun:test";
import { solution } from "./solution";

describe("", () => {
  test("", () => {
    expect(solution(182, 281)).toBeTrue();
    expect(solution(34, 14)).toBeFalse();
    expect(solution(3589578, 5879385)).toBeTrue();
    expect(solution(22, 222)).toBeFalse();
  });
});
