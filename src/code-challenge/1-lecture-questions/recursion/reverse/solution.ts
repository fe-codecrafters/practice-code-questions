export function reverse(str: string) {
  const mid = Math.floor(str.length / 2);
  let count = 0;
  function recursiveReverse(str: string) {
    if (mid === count) return str;
    str =
      str.slice(0, count) +
      str[str.length - 1 - count] +
      str.slice(1 + count, str.length - 1 - count) +
      str[count] +
      str.slice(str.length - 1 - count + 1);
    count++;
    return recursiveReverse(str);
  }

  return recursiveReverse(str);
}
