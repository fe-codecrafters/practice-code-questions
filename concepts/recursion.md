# recursion


- base case
- recursive case, with different input

# example 1

```javascript
// Iterative Version
function countDown(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!")
}

// Recursive Version
function countDown(num){
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// Recursive func with return
function sumRange(num){
   if (num === 1) return 1; 
   return num + sumRange(num-1);
}
```

# example 2

```javascript
// Iterative factorial
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

// Recursive factorial
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

```

# Common Mistakes

- no base case
- no return (to stop execution)
- stack over flow

# example 3

```javascript
// helper method recursion
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

// Pure recursion
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```