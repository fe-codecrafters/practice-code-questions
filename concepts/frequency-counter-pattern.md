# Frequency counter pattern

- 배열 요소의 값 혹은 count(frequency)를 Hash Table(Object)에 저장한다.
- 이 정보를 기반으로 O(n^2) -> O(n) 으로 줄일 수 있다.

# Example

함수 sameSquared 만들기

```typescript
const sameSquared = (arr1: number[], arr2: number[]) => boolean;
```

- `arr1`의 숫자 값이 `arr2`에 제곱으로 있어야 한다. 값의 등장 횟수는 같다.

## naive solution

```jsx
// indexOf는 O(n)이기 때문에, O(n^2)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
```

## use frequency counter pattern

```jsx
// O(3n) => O(n)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // arr1의 정보 저장 O(n)
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    // arr2의 정보 저장 O(n)
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    // 객체의 key를 순회하며 조건에 맞는지 확인 O(n)
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
```