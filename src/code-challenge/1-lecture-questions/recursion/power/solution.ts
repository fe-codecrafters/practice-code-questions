export function solution(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  return base * solution(base, exponent - 1);
}
