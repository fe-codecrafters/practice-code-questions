export function solution(arr: any[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(solution(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
