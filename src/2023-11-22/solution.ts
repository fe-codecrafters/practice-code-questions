export const solutions = {
  1: (num_list: number[]) =>
    num_list
      .slice()
      .sort((a, b) => a - b)
      .slice(0, 5),
  2: (my_string: string) => my_string.split(" "),
  3: (a: number, b: number) => {
    if (a % 2 === 1 && b % 2 === 1) return Math.pow(a, 2) + Math.pow(b, 2);
    if (a % 2 === 1 || b % 2 === 1) return (a + b) * 2;
    return Math.abs(a - b);
  },
  4: (n: number) => {
    if (n % 2 === 0) return (n * (n + 2)) / 4;
    if (n % 2 === 1) return ((n - 1) * (n + 1)) / 4;
  },
  5: (numbers: number[]) => {
    return numbers.reduce((a, c) => a + c) / numbers.length;
  },
};
