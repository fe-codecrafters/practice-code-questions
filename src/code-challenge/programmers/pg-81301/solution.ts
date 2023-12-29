const isNum = (char: string) => {
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57;
};

export function solution(s: string): number {
  let result = "";
  const numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let nextStartIdx = 0;
  for (let i = 0; i < s.length; i++) {
    if (isNum(s[i])) {
      let maybeWord = "";
      for (let j = nextStartIdx; j < i; j++) {
        maybeWord += s[j];
        const idx = numStr.indexOf(maybeWord);
        if (idx !== -1) {
          result += idx;
          maybeWord = "";
        }
      }
      nextStartIdx = i + 1;
      result += s[i];
    } else if (i === s.length - 1) {
      let maybeWord = "";
      for (let j = nextStartIdx; j < s.length; j++) {
        maybeWord += s[j];
        const idx = numStr.indexOf(maybeWord);
        if (idx !== -1) {
          result += idx;
          maybeWord = "";
        }
      }
      nextStartIdx = i + 1;
    }
  }
  return Number(result);
}
