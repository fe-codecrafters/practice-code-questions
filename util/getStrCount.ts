export function getStrCount(str: string): Record<string, number> {
  // return [...K].every(c => sub.includes(c))
  const countObj: Record<string, number> = {};
  for (const char of str) {
    if (!countObj[char]) {
      countObj[char] = 1;
    } else {
      countObj[char]++;
    }
  }
  return countObj;
}
