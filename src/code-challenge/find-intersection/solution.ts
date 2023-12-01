export const solution = (strArr: string[]) => {
  // find intersection (교집합)
  const [first, second] = strArr.map(el => el.split(', '))

  const hashMap = {}
  const result: string[] = [];
  for (const f of first) {
    if (!hashMap[f]) hashMap[f] = 0;
    else hashMap[f]++
  }
  
  for (const s of second) {
    if (hashMap[s] > 0) {
      result.push(s);
    }
  }
  
  return result.toString()
}