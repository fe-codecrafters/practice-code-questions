export function solution(str: string): boolean {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return solution(str.slice(1, -1));
}
