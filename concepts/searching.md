# Searching

리스트에 있는 요소를 찾는 방법

# Linear Search (선형 검색)

```typescript
// 시간복잡도 Worst: O(n) Best: O(1)
function linearSearchIndexOf(arr: any[], value: any) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
```

# Binary Search

- 리스트의 아이템이 모두 정렬이 되어 있어야 한다.
- 처음에는 모든 리스트를 하나의 범위로 잡고 (window) 리스트의 중간값을 찾는다.
- 중간값이 찾기 원하는 값 보다 작으면 중간값 기준 큰 방향으로 새로운 범위를 잡고, 아니면 반대로 잡는다.

```typescript
// 길이가 홀수, 짝수일 때 중간값 구하는 방법이 다른 점 주의
// while의 조건이 true일 때 까지 돈다는 점 다시 확인
// left와 right가 같을 때도 다시 검사하는 로직이 있어야 한다.
// 시간복잡도 Worst: O(log n) Best: O(1)
function binarySearch(arr: number:[], value: number) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left;
    if (arr[mid] === value) return mid
    if (arr[mid] < value) left = mid + 1
    if (arr[mid] > value) right = mid - 1
  }
  return -1
}
```

# Searching String

```typescript
// str 내에 match가 몇 개 있는지 찾는 문제
function countMatch(str: string, match:string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < match.length; j++) {
      if (str[i + j] !== match[j]) break;
      if (j === match.length - 1 && str[i + j] === match[j]) count++
    }
  }
  return count;
}
```

# KMP String Searching Algorithm