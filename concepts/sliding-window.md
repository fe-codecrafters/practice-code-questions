# Sliding Window

순서가 있는 데이터를 순회할 때 완전 탐색을 하지 않고 sub-array를 조건에 따라 선택하여 시간복잡도를 줄이는 테크닉

# Example

길이가 n인 sub-array 중 가장 길이가 긴 sub-array의 합

```javascript
// naive
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let max = -Infinity;
  
  // [0, 1, 2, 3, 4, 5, 6]
  // 0부터 6까지 모두 검사
  for (let i = 0; i < arr.length - num + 1; i ++){
  
    // index i부터 i + num - 1까지 모두 더한다.
    let temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    
    // sub-array sum이 확인된 max보다 크면 할당
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// refactor
// 이미 확인한 부분은 확인하지 않는다.
function maxSubarraySum(arr, num){
  // [0, 1, 2, 3, 4, 5, 6]
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // [0, 1, 2]의 합을 알고 있다면, [1, 2, 3]의 합을 구할 때 굳이 [1, 2]를 조회할 필요가 없다.
  // [0, 1, 2]의 합 - 0 + 3하면 됨. 중간에 있는 숫자는 모두 같음으로 앞을 빼고 뒤를 더하면 되는것
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

