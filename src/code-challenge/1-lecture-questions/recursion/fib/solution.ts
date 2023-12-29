export function fib(num: number): number {
  if (num === 1) return 1;
  if (num === 2) return 1;
  return fib(num - 2) + fib(num - 1);
}
