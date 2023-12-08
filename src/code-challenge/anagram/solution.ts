export function solution(w1: string, w2: string) {
  const count: Record<string, any> = {}
  for (const char of w1) {
    if (!count[char]) count[char] = 1
    else count[char]++
  }
  for (const char of w2) {
    if (count[char] > 0) count[char]--
    else return false;
  }
  for (const num in count) {
    if (count[num] > 0) return false;
  }
  return true
}
