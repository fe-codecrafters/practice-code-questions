function LongestWord(sen) { 
  return sen.split(' ')
  .map(s => s.replace(/[^a-zA-Z0-9]/g, ''))
  .reduce((acc, cur) => acc.length >= cur.length ? acc : cur); 
}

// 1. For input "9???1???9???1???9" the output was incorrect. The correct output is true
// 2. For input "5??aaaaaaaaaaaaaaaaaaa?5?a??5" the output was incorrect. The correct output is true