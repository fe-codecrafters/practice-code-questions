export function solution(numbers: number[]) {
  const count: Record<number, number> = {	0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0,	6: 0, 7: 0, 8: 0, 9: 0 };
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
      count[numbers[i]]++
  }
  for (let i = 0; i < 10; i++) {
      if (count[i] === 0) result += i
  }
  return result;
}