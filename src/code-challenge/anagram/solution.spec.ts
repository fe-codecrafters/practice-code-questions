import { expect, test, describe } from "bun:test";
import { solution  } from "./solution";

describe("", () => {
  test('', () => {
    expect(solution('', '')).toBe(true)
    expect(solution('aaz', 'zza')).toBe(false)
    expect(solution('anagram', 'nagaram')).toBe(true)
    expect(solution("rat","car")).toBe(false)
    expect(solution('awesome', 'awesom')).toBe(false)
    expect(solution('amanaplanacanalpanama', 'acanalmanplanpamana')).toBe(false)
    expect(solution('qwerty', 'qeywrt')).toBe(true)
    expect(solution('texttwisttime', 'timetwisttext')).toBe(true)
  })
})