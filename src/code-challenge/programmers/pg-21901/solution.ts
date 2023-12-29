export function solution(a: number, b: number) {
  const date: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];
  const lastDates: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let currentDateIdx = 5;
  for (let m = 0; m < lastDates.length + 1; m++) {
    for (let d = 1; d < lastDates[m] + 1; d++) {
      if (currentDateIdx === 7) {
        currentDateIdx = 0;
      }
      if (m + 1 === a && d === b) {
        return date[currentDateIdx];
      }
      currentDateIdx++;
    }
  }
  return null;
}

// function solution(a, b) {
//   const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
//   return week[new Date(2016, a - 1, b).getDay() ]
// }

// function solution(a, b) {
//   const week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
//   const monthDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
//   let days = monthDays.slice(0, a).reduce((a,c) => a + c) + b
//   return week[days % 7]
// }
