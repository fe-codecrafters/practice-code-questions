export default function s(arr) { 
  if (arr[1] % arr[0]) return -1;

  let isArithmetic = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== arr[0]) {
      isArithmetic = false;
      break;
    }
  }

  let isGeometric = true;
  const base = arr[1] / arr[0] 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== base) {
      isGeometric = false;
      break;
    }
  }

  if (isArithmetic) return 'Arithmetic'
  if (isGeometric) return 'Geometric'
  return -1
}

