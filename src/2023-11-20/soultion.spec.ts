import { expect, test, describe } from "vitest";
import { solutions as s } from "./solution";

describe("1번 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120804", () => {
  test("", () => {
    expect(s[1](3, 4)).toBe(12);
  });

  test("", () => {
    expect(s[1](3, 4)).toBe(12);
  });
});

describe("2번 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120807", () => {
  test("", () => {
    expect(s[2](2, 3)).toBe(-1);
  });
  
  test("", () => {
    expect(s[2](11, 11)).toBe(1);
  }); 
})

describe("3번 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120805", () => {
  test("", () => {
    expect(s[3](10, 5)).toBe(2);
  });
  
  test("", () => {
    expect(s[3](7, 2)).toBe(3);
  }); 
})

describe("4번 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120803", () => {
  test("", () => {
    expect(s[4](2, 3)).toBe(-1);
  });
  
  test("", () => {
    expect(s[4](100, 2)).toBe(98);
  }); 
})

describe("3번 문제: https://school.programmers.co.kr/learn/courses/30/lessons/120820", () => {
  test("", () => {
    expect(s[5](40)).toBe(1983);
  });
  
  test("", () => {
    expect(s[5](23)).toBe(2000);
  }); 
})
