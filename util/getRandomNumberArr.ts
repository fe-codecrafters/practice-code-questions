export default function getRandomNumberArr(length: number) {
  return new Array(length).fill(0).map(() => parseInt(String(Math.random() * 1000)))
}