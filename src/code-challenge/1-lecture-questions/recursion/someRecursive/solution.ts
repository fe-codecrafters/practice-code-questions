export function solution(arr: number[], func: (arg: any) => boolean): boolean {
  if (arr.length === 0) return false;
  if (func(arr[0])) return true;
  return solution(arr.slice(1), func);
}
