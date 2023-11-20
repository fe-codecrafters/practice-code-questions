export const solutions = {
  1: (num1, num2) => num1 % num2,
  2: (num1, num2) => num1 + num2,
  3: (num1: number, num2: number) => parseInt(String(Number(num1 / num2) * 1000), 10),
  4: (angle: number) => {
    if (angle < 90) return 1;
    if (angle === 90) return 2;
    if (angle < 180) return 3;
    return 4;
  },
  5: (myString: string, pat: string) => {
    // 대소문자 구분 없기 때문에 toLowerCase
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    const myLen = myString.length;
    const patLen = pat.length;
    for (let i = 0; i < myLen - patLen + 1; i += 1) {
      // my의 길이가 pat의 길이보다 길지 않으면 검사 할 필요가 없음
      if (myString.slice(i, i + patLen) === pat) {
        // 순회를 할 필요가 없으면 early return
        return 1;
      }
    }
    return 0;
  },
}