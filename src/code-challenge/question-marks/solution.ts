function QuestionsMarks(str) { 
  // input: string
    // 0-9, a-z, a-Z, ?
  // output: 'true', 'false'

  // find where digits is
  const digitsIndex = []
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      digitsIndex.push(i)
    }
  }
  console.log(digitsIndex)

  // find if digit's sum is up to 10
  // every pair of two numbers that add up to 10
  const numPair = []
  for (let i = 0; i < digitsIndex.length; i++) {
    for (let j = i + 1; j < digitsIndex.length; j++) {
      console.log(str[digitsIndex[i]], str[digitsIndex[j]])
      if (Number(str[digitsIndex[i]]) + Number(str[digitsIndex[j]]) === 10) {
        numPair.push([digitsIndex[i], digitsIndex[j]])
      }
    }    
  }
  console.log(numPair)
  if (numPair.length === 0) return 'false'

  // find if question mark is more than 3 (not sure it needs to be consequent)
  for (const pair of numPair) {
    const [f, l] = pair
    const sub = str.slice(f, l);
    if (sub.split('?').length - 1 !== 3) return 'false'
  }

  return 'true'; 
}

// keep this function call here 

// console.log(Number('?'))

// "acc?3??sss?3rr1??????5" 10보다 작은 합도 괜찮은지
  // OK up to 10이니까..
// "acc?3??sss?3rr9??????9" 10보다 큰 합도 괜찮은지
  // 안될듯
