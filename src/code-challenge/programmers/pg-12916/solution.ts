export function solution(s: string) {
  s = s.toLowerCase();
  const count = { p: 0, y: 0 };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") count["p"]++;
    if (s[i] === "y") count["y"]++;
  }
  return count.p === count.y;
}
