export function solution(n: number) {
  const answer: number[][] = [];
  function hanoi(n: number, a: number, b: number, c: number) {
    if (n === 1) {
      answer.push([a, c]);
      return;
    }
    hanoi(n - 1, a, c, b);
    answer.push([a, c]);
    hanoi(n - 1, b, a, c);
  }
  hanoi(n, 1, 2, 3);
  return answer;
}
