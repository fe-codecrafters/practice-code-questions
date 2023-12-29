export function solution(num: number): number {
  if (num === 1 || num === 0) return 1;
  return num * solution(num - 1);
}
