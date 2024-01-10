# 소수 (Prime Number)



- n의 소수를 확인하는 방법 (에라토스테네스의 체)

![에라토스테네스의 체](https://commons.wikimedia.org/wiki/File:Sieve_of_Eratosthenes_animation.gif)

1. 2부터 n까지 모든 수를 나열한다.
2. 2의 배수를 모두 제외한다.
3. 3의 배수를 모두 제외한다.
4. ... $\sqrt{x}$의 배수까지 같은 내용을 진행 ()

```js
function getPrimeEratosthenes(n) {
  let maybePrime = [false, false, ...Array.from(Array(n - 1), (v, i) => i + 2)]

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (maybePrime[i]) {
      for (let j = 2; i * j <= n; j++) {
        maybePrime[i * j] = false;
      }
    }
  }

  return maybePrime.filter(e => Boolean(e))
}
```