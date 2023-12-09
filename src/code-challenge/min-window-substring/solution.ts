export function solution(strArr: [string, string]) {
  const [N, K] = strArr;

  // input: [string, string]
  // 1 <= N <= 50
  // 1 <= K <= 50
  // all lowercase
  // output: string
  // the smallest substring of N that contains all the characters in K.
  // select substring

  // check if it sub all char
  function getStrCount(str: string) {
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

  // K와 숫자가 같은지 비교, sub에 있는게 K에는 있을 필요가 없지만 K에 있는 것은 sub에 무조건 다 있어야 함 -> O(N)
  function compareStrCount(
    sub: Record<number, number>,
    K: Record<number, number>,
  ) {
    for (const key in K) {
      if (!sub[key]) {
        return false;
      } else {
        if (sub[key] < K[key]) return false;
      }
    }
    return true;
  }

  const KCount = getStrCount(K);

  let sub = N;
  for (let i = 0; i < N.length + 1; i++) {
    for (let j = i + 1; j < N.length + 1; j++) {
      const temp = N.slice(i, j);
      const tempCount = getStrCount(temp);
      if (compareStrCount(tempCount, KCount) && sub.length > temp.length) {
        sub = temp;
      }
    }
  }
  // affhkkse
  // { a: 1, f: 2, h: 1, k: 2, s: 1, e: 1 } { f: 1, h: 1, e: 1, a: 1 }

  return sub;
}

// keep this function call here

// console.log(MinWindowSubstring(['abcdefgh']));

// console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));
// console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]));

// count가 작을 때 X
// count가 같을 때 O
// count가 클 때 O

// ['abcdefghabcdzzfzzf', 'fffzz'] -> fghabcdzzfzzf

// ---

export function MinWindowSubstring2(strArr: [string, string]) {
  const [N, K] = strArr;

  // input: [string, string]
  // 1 <= N <= 50
  // 1 <= K <= 50
  // all lowercase
  // output: string
  // the smallest substring of N that contains all the characters in K.
  // select substring

  // check if it sub all char
  function getStrCount(str: string) {
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

  const KCount = getStrCount(K);

  // K와 숫자가 같은지 비교, sub에 있는게 K에는 있을 필요가 없지만 K에 있는 것은 sub에 무조건 다 있어야 함 -> O(N)
  function compareStrCount(
    sub: Record<string, number>,
    K: Record<string, number>,
  ) {
    for (const key in K) {
      if (!sub[key]) {
        return false;
      } else {
        if (sub[key] < K[key]) return false;
      }
    }
    return true;
  }

  let sub = N;
  let leftP = 0;
  let rightP = 1;
  let plusLeftOrRight = "right";
  while (rightP <= N.length) {
    // console.log(sub, sub.length, leftP, rightP, plusLeftOrRight)
    const temp = N.slice(leftP, rightP);
    const tempCount = getStrCount(temp);
    let isMatch = false;
    if (compareStrCount(tempCount, KCount) && sub.length >= temp.length) {
      sub = temp;
      isMatch = true;
    }
    if (isMatch) {
      plusLeftOrRight = "left";
    }
    plusLeftOrRight === "left" ? leftP++ : rightP++;
    if (leftP === rightP) {
      plusLeftOrRight === "right";
      rightP++;
    }
  }
  // affhkkse
  // { a: 1, f: 2, h: 1, k: 2, s: 1, e: 1 } { f: 1, h: 1, e: 1, a: 1 }

  return sub;
}

// keep this function call here

// console.log(MinWindowSubstring(['abcdefgh']));

// console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));
// console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"]));

// count가 작을 때 X
// count가 같을 때 O
// count가 클 때 O

// ['abcdefghabcdzzfzzf', 'fffzz'] -> fghabcdzzfzzf
