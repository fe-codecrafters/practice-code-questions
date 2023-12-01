export const solution = (arr: number[]) => {
  // input: int[]
  // output: number needed to be consecutive

  const _arr = arr.slice().sort((a, b) => a - b);
  const first = _arr[0]
  const last = _arr[_arr.length - 1]
  if (first === last) return 0;

  const gap = last - first - 1;
  const between = _arr.length - 2

  // code goes here  
  // [5,10,15] => [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] => 8
  // gap = 15 - 5 - 1 = 9
  // between = 3 - 2 = 1 elements between first and last
  return gap - between;
}