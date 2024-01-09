
## Permutation

```javascript
const getPermutations= function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};
```

## Combination

```javascript
const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}
```

Reference: https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349

## 순열 코드를 사용한 문제

```javascript
function solution(ability) {
    const sectionLength = ability[0].length
    const personLength = ability.length
    const candidate = Array(personLength).fill(0).map((_, i) => i);
    const permus = getPermutations(candidate, sectionLength);
    let max = 0;
    for (let p = 0; p < permus.length; p++) {
        const set = permus[p]
        let subMax = 0
        for (let perIdx = 0; perIdx < set.length; perIdx++) {
            const person = set[perIdx]
            const section = perIdx
            subMax += ability[person][section]
        }
        if (max < subMax) max = subMax
    }
    return max;
}

const getPermutations = (array, selectNumber) => {
  const results = [];
  if (selectNumber === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(0, index).concat(origin.slice(index + 1));
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);

    results.push(...attached);
  });
  return results;
};
```

질문: https://school.programmers.co.kr/learn/courses/20847/lessons/255901

(파이썬은 속도 제한도 걸리지 않고 문제가 풀린다고 한다 .. )

```python
from itertools import permutations
def solution(ability):
    answer = 0
    
    p = list(permutations(ability, len(ability[0])))
    
    for i in range(len(p)):
        total = 0
        for j in range(len(p[i])):
            total += p[i][j][j]
        answer = max(answer, total)
    
    return answer
```