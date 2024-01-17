# Sorting

Sorting is the process of rearranging the items in a collection so that the items are in some kind of order.

- Sorting numbers from smallest to largest (ASC)
- Sorting numbers from alphabetically
- Sorting movies based on release year, ...

https://www.toptal.com/developers/sorting-algorithms

## JavaScript built-in sort

- mutator method
- if comparator returns -, a should come before b
- if comparator returns +, a should come after b
- if comparator returns 0, same

```javascript
let arr = [1, 9, 5, 3, 4, 2]
arr.sort() //  [1, 2, 3, 4, 5, 9]
arr //  [1, 2, 3, 4, 5, 9] 

arr = [1, 9, 5, 3, 4, 2]
arr.sort((a, b) => a - b); // b가 크면 -, a가 앞으로
arr.sort((a, b) => b - a); // b가 작으면 +, a가 뒤로
```

## Bubble Sort

- Worst O(n^2) Best O(n)
- 순회하면서 가장 마지막에 가장 큰 요소를 둔다.
- 가장 크다고 확인된 요소는 순회할 필요가 없기 때문에 다음 순회에서 제외한다.

```javascript
function bubbleSort(arr){
  for(let i = arr.length; i > 0; i--){
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}
```

- 만약에 순회 중에 한 번도 swap이 없었다면 이미 잘 정렬이 된 배열이기 때문에 바로 리턴한다.

```javascript
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){
    noSwaps = true;
    for(let j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
```

## Selection Sort

- Worst O(n^2) Best O(n)
- 2중 반복문이 다 끝나고 Swap을 하기 때문에 Bubble Sort보다 Swap이 적다.
- 순회하면서 가장 앞에 가장 작은 요소를 둔다.
- 가장 작다고 확인된 요소는 순회할 필요가 없기 때문에 다음 순회에서 제외한다.

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    // i가 가장 작은 경우, 이미 가장 작은 요소가 가장 앞에 있기 때문에 바꿀 필요가 없다.
    if (i === lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr;
}
```

## Insertion Sort

- Worst O(n^2) Best O(n)
- 정렬하는 왼쪽(작은 쪽) 덩어리를 다시 정렬할 필요가 없게 언제나 정렬되게 만든다.
- 데이터가 거의 잘 정렬이 되어있으면 Swap과 Lookup이 매우 적다.
- 데이터가 라이브로 계속 들어오는 경우에 사용하면 좋다. (이미 왼쪽 덩어리는 잘 정렬되어 있기 때문)

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = currentVal;
  }

  return arr;
}
```

```javascript
// 두 코드는 같음
for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {}
for (let j = i - 1; j >= 0; j--) { if (!arr[j] > currentVal) break; }
```

# Sum-up

| Sorting Algorithm | Best | Average | Worst | Space |
|-------------------|------|---------|-------|-------|
| Bubble Sort       | O(n) | O(n^2) | O(n^2) | O(1) |
| Selection Sort    | O(n^2) | O(n^2) | O(n^2) | O(1) |
| Insertion Sort    | O(n) | O(n^2) | O(n^2) | O(1) |
