// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
export function solution(...args: number[] | string[]) {
  const count: Record<string, number> = {};
  for (let i = 0; i < args.length; i++) {
    if (!count[args[i]]) {
      count[args[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}
