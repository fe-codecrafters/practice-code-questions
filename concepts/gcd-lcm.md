# GCD (최대공약수)

- 공약수: 두 수 이상의 여러 수의 공통인 약수
- 최대공약수: 두 수 이상의 여러 수의 공통인 약수 중 가장 큰 수
- 서로소: `gcd(a, b) = 1` 최대공약수가 1인 수

최대공약수 예시

```
gcd(48, 18) - 최대공약수는 6
gcd(20, 8) - 최대공약수는 4
gcd(25, 5) - 최대공약수는 5
gcd(7, 3) - 최대공약수는 1 (서로소)
gcd(0, 5) - 최대공약수는 5 (어떤 수와 0의 최대공약수는 언제나 그 수 자신입니다)
```

## 활용

- 최소공배수를 알면 최대공약수를 구할 수 있다.

$$
gcd(a,b)=
\frac{\vert ab\vert}{lcm(a, b)}
$$

- 최대공배수를 알면 최소공배수를 구할 수 있다.

$$
lcm(a,b)=
\frac{\vert ab\vert}{gcd(a, b)}
$$

- 세 수 이상의 최소공배수를 구하려면 두 수 이상의 최소공배수를 구하고, 그 최대공배수와 다음 수의 최대공배수를 구한다.

$$
gcd(a,b,c)=
gcd(gcd(a, b), c) =
\frac{\vert abc\vert}{lcm(\frac{\vert ab\vert}{lcm(a, b)}, c)}
$$

## 최대공약수 구하는 방법

- 약수인지 확인하는 방법

```js
const isDivisor = (num, divisor) => num % divisor === 0;
```

- 1부터 num까지의 약수 목록을 구하는 방법 1 (naive)

1부터 num까지의 `num % i`로 나누어 나머지가 0인 수만 모은다.

```js
function listDivisor(num) {
    let arr = [1];
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) arr.push(i);
    }
    return arr
}
```

- 1부터 num까지의 약수 목록을 구하는 방법 2 (optimized)

1부터 `Math.sqrt(num)`까지 `num % i`로 나누어 나머지가 0인 수만 모은다.
`num % 모은 수`를 하면 나머지 약수를 찾을 수 있다.
정수 N의 약수들은 N의 제곱근을 중심으로 대칭을 이루기 때문이다.

> 1부터 12까지의 약수
> [1, 2, 3, 4, 6, 12]
> 약수 목록은 12의 제곱근 3.4641016151377544... 을 중심으로 대칭을 이룬다.

제곱근이 정수인 경우, 중복 작성하지 않도록 주의한다.

```js
function listDivisor(num) {
    let arr = [1];
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) arr.push(i)
    }
    
    let len = arr.length - 1
    for (let i = len; i >= 0; i--) {
      if (arr[i] !== Math.sqrt(num)) arr.push(num / arr[i])
    }

    return arr
}
```

- 최대공약수인지 확인하는 방법 1 (naive)

1부터 `Math.min(a,b)`까지 `a % i === 0 && b % i === 0` 조건에 만족하는지 확인한다.
a와 b의 최대공약수는 a나 b보다 클 수 없음으로, a와 b중 작은 수 까지만 순회하면 된다.
확인된 수 중 가장 큰 수를 리턴한다.

```js
function GCD(a, b) {
  let max = 1
  for (let i = 2; i <= Math.min(a,b); i++) {
    if (a % i === 0 && b % i === 0) max = i
  }
  return max
}
```

- 최대공약수인지 확인하는 방법 2 (naive, 두 수의 약수를 모두 찾아 비교하는 방법)

```js
function GCD(a, b) {
    const nGCD = listPrime(n)
    const mGCD = listPrime(m)
    let GCD;
    for (let i = 0; i < mGCD.length; i++) {
      if (nGCD.includes(mGCD[i])) GCD = mGCD[i]
    }
    return GCD
}

function listDivisor(num) {
    let arr = [1];
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) arr.push(i)
    }
    
    let len = arr.length - 1
    for (let i = len; i >= 0; i--) {
      if (arr[i] !== Math.sqrt(num)) arr.push(num / arr[i])
    }

    return arr
}
```

- 최대공약수인지 확인하는 방법 3 (유클리드 호제법)

유클리드 호제법은 두 양의 정수 a, b $(a > b)$에 대하여 $a=bq+r (0\leq r < b)$ 이라 하면
a, b의 최대공약수는 b, r의 최대공약수와 같다. 즉 $gcd(a, b) = gcd(b, r)$
r이 0이면 a, b의 최대공약수는 b가 된다.

나머지가 0이면 a, b의 최대공약수는 b가 되는 성질을 이용해서
나머지 `r = a % b`, 정수 a `a = b`, 정수 b `b = r`를 `b === 0`일 때 까지
계속 해주면 최대공약수를 얻을 수 있다.


```js
// iterative
function GCD(a, b){
    let r = 0;
    while(b){
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

// recursive
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}
```
