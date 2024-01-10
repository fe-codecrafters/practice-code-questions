# Sorting

Sorting is the process of rearranging the items in a collection so that the items are in some kind of order.

- Sorting numbers from smallest to largest (ASC)
- Sorting numbers from alphabetically
- Sorting movies based on release year, ...

https://www.toptal.com/developers/sorting-algorithms

# JavaScript built-in sort

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

# Bubble Sort

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
