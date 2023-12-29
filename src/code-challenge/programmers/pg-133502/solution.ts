export function solution(ingredient: number[]) {
  // 빵 - 1, 야채 - 2, 고기 - 3, 빵 - 1
  return makeHamburger(ingredient, 0);
}

function makeHamburger(ingredient: number[], count: number) {
  const temp: number[] = [];
  for (let i = 0; i < ingredient.length; i++) {
    if (
      temp.length === 0 &&
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      temp.push(i, i + 1, i + 2, i + 3);
      break;
    }
  }

  if (temp.length < 4) return count;

  const next = ingredient.filter((_, i) => !temp.includes(i));
  return makeHamburger(next, count + 1);
}

// function solution(ingredient) {
//   // 빵 - 1, 야채 - 2, 고기 - 3, 빵 - 1
//   let count = 0;
//   for (let i = 0; i < ingredient.length; i++) {
//       if (ingredient[i] === 1
//     && ingredient[i + 1] === 2
//     && ingredient[i + 2] === 3
//     && ingredient[i + 3] === 1
//          ) {
//           count++
//       }
//   }

//   return count
// }

// function solution(ingredient) {
//   // 빵 - 1, 야채 - 2, 고기 - 3, 빵 - 1
//    let ingredientCopy = ingredient.slice();
//    let count = 0;
//    let i = 0
//    for (; i < ingredientCopy.length;) {
//        if (ingredientCopy[i] === 1
//      		&& ingredientCopy[i + 1] === 2
//      		&& ingredientCopy[i + 2] === 3
//      		&& ingredientCopy[i + 3] === 1
//           ) {
//            count++
//            ingredientCopy.splice(i, 4);
//            i = 0;
//        } else {
//        	 i++;
//        }
//    }
//    return count;
// }

// function solution(ingredient) {
//   // 빵 - 1, 야채 - 2, 고기 - 3, 빵 - 1
//   let count = 0;
//   let i = 0;
//   const stack = [];
//   while (i < ingredient.length) {
//     stack.push(ingredient[i]);
//     i++;
//     if (
//         stack[stack.length - 4] === 1 &&
//         stack[stack.length - 3] === 2 &&
//         stack[stack.length - 2] === 3 &&
//         stack[stack.length - 1] === 1
//       ) {
//         count++;
// 		stack.splice(stack.length - 4, 4);
//       }
//     }
//   return count;
// }
