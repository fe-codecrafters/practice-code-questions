import { expect, test, describe } from "vitest";
import { solutions as s } from "./solution";

describe("나머지 구하기: https://school.programmers.co.kr/learn/courses/30/lessons/120810", () => {
  test("", () => {
    expect(s[1](3, 2)).toBe(1);
  });

  test("", () => {
    expect(s[1](10, 5)).toBe(0);
  });
});

describe("두 수의 합: https://school.programmers.co.kr/learn/courses/30/lessons/120802", () => {
  test("일반적인 합", () => {
    expect(s[2](2, 3)).toBe(5);
  });
  
  test("합이 음수인 경우", () => {
    expect(s[2](-12381, 12039)).toBe(-342);
  }); 
})

describe("두 수의 나눗셈: https://school.programmers.co.kr/learn/courses/30/lessons/120806", () => {
  test("나누어 떨어지는 경우", () => {
    expect(s[3](2, 2)).toBe(1000);
  });
  
  test("나누어 떨어지지 않는 경우", () => {
    expect(s[3](7, 3)).toBe(2333);
  }); 
  
  test("몫이 1보다 작은 경우", () => {
    expect(s[3](1, 16)).toBe(62);
  }); 
})

describe("각도기: https://school.programmers.co.kr/learn/courses/30/lessons/120829", () => {
  test("예각인 경우 1을 리턴한다.", () => {
    expect(s[4](70)).toBe(1);
  });
  
  test("직각인 경우 2를 리턴한다.", () => {
    expect(s[4](90)).toBe(2);
  }); 
  
  test("둔각인 경우 3을 리턴한다.", () => {
    expect(s[4](160)).toBe(3);
  }); 
  
  test("평각인 경우 4를 리턴한다.", () => {
    expect(s[4](180)).toBe(4);
  }); 
})

describe("원하는 문자열 찾기: https://school.programmers.co.kr/learn/courses/30/lessons/181878", () => {
  const randStringGen = (length: number) => {
    const lowerUpperAlphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randString = '';
    for (let i = 0; i < length; i += 1) {
      const ranNum = parseInt(String(Math.random() * lowerUpperAlphabets.length));
      randString = randString.concat(lowerUpperAlphabets[ranNum]);
    }
    return randString;
  }
  const myStr = randStringGen(100000)
  const pat = myStr.slice(-300)

  test("연속한 문자열이 같은 경우 1을 리턴한다.", () => {
    expect(s[5]("AbCdEfG", "aBc")).toBe(1);
    expect(s[5]("WiuhyddrDHGFraAfoKtJnvgcxAarwZhjWsPCSJAcVWFlfADCJVSFVnhUNXvaULqMISvmHfavjBMCMRRndYwHKKuVqOxoYCPTRVIlffAJPmhVHKXZPtVPxUCMZep", "cxAarwZhjWsPCSJAcVWFlfADCJVSFVnhUNXvaULqMISvmHfavjBMCMRRndYwHKKuVqOxoYCPTRVIlffAJPmhVHKXZPtVPxUCMZep")).toBe(1);
  });
  
  test("최대값도 5초 안에 통과합니다.", () => {
    // bun은 너무 빨라서 무의미 ..
    expect(s[5](myStr, pat)).toBe(1);
  }, {
    timeout: 5000
  }); 
})
