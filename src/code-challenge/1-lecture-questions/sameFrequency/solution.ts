// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
export function solution(num1: number, num2: number): boolean {
  const firstFreq: Record<string, number> = {};
  const num1Str = String(num1);
  const num2Str = String(num2);
  for (let i = 0; i < num1Str.length; i++) {
    if (!firstFreq[num1Str[i]]) {
      firstFreq[num1Str[i]] = 1;
    } else {
      firstFreq[num1Str[i]]++;
    }
  }
  for (let i = 0; i < num2Str.length; i++) {
    if (firstFreq[num2Str[i]] > 0) {
      firstFreq[num2Str[i]]--;
    } else {
      return false;
    }
  }
  return true;
}
