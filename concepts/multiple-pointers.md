# Multiple pointers

조건에 따라 pointer를 옮겨다니며 최적화를 하는 방식, 단순한 완전 탐색보다 효율적이다.

# Example

합이 0인 첫 번째 숫자 pair를 리턴

```typescript
const sumZero = (number[]) => [number, number] | undefined
```

## naive solution

```javascript
// O(n^2)
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
```

## refactor

- 가장 첫 번째인 것을 어떻게 보장하지?
  - 배열이 순서대로 sorted 되어 있기 때문에, sum보다 크면 right index - sum보다 작으면 left index +

```javascript
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
```