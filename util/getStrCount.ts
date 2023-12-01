function getStrCount (str: string): Record<string, any> {
  // return [...K].every(c => sub.includes(c))
  const countObj = {};
  for (const char of str) {
    if (!countObj[char]) {
      countObj[char] = 1;
    } else {
      countObj[char]++;
    }
  }
  return countObj
}