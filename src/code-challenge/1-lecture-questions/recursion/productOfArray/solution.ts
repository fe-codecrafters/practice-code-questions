export function solution(arr: number[]): number {
  if (arr.length === 0) return 1;
  return arr[arr.length - 1] * solution(arr.slice(0, -1));
}
