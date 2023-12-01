# algorithm

- a process or set of steps to accomplish a certain task
- 문제 해결 방식을 정리
- 자주 나오는 문제를 정리

# Problem Solving

- 문제를 이해하고
- 예제를 해보고
- 문제를 나누고
- 문제를 단순화하고
- 리펙토링
- George Poly, How To Solve It (문제 해결을 위한 좋은 책)

# 문제 이해

- 문제 이해를 위한 시간을 가져라
  1. 나의 언어로 문제를 다시 정의할 수 있는지?
  2. Input 
  3. Output
  4. 문제 해결을 위한 충분한 정보가 있는지?
  5.

# 예시, sum

1. 더하기
2. 두 정수 (최대, 최소에 대한 생각 필요)
  - 두 정수가 아니라면?
  - 정수 최대 범위를 넘는다면?
3. 
4. 문제 해결을 위한 충분한 정보가 있는지? (보통은 다 있음)

# 예시를 만들어보기

- 예시를 만들어보는게 문제를 좀 더 쉽게 이해하는데 도움이 된다.
- 예시는 sanity check를 할 수 있다.
- User Story, Unit Test
- 알고리즘 문제를 만나면 일단 간단한 예시를 적어라
- 복잡한 예시로 업그래이드
- 빈 input 고려
- invalid input 고려

# 예시, string => count of each char
(섣부르게 판단하지 말고 천천히 시간을 가지고 해라..)

1. string => each char length
2. string
  - is it string?
  - is it valid string?
  - dose it have any condition for valid string?
3. output
  - {}
4. 충분한 정보
  - yes

(upper case, lower case, number string)
(null? boolean? ...) -> think it like typescript

# 문제를 나누기
- 코드 적으면서 말 열심히 하면서 진행하는게 면접의의 이해를 돕기에 좋고, 힌트를 얻을 수도 있다.
- 계속 문제 해결을 하도록 일부러 어렵게 만든 경우가 있기 때문에 겁먹지 말고 최선을 다할 것

# 예시

alphanumeric string

# 문제 단순화

- 전체 문제를 해결할 수 없어도 조금 더 쉬운(간단한) 문제를 풀려고 노력해라

# 리펙터링

- 코드를 한 번에 이해할 수 있는가?
- 이 코드를 다시 쓸 수 있는가?
- 퍼포먼스에 문제가 없는가?
- 다른 방법으로 풀 수 있는가?
- 다른 사람은 어떻게 문제를 풀었는가?


- for loop < for of (?)
- if else to 삼항연산자 (ternary)
- var -> let const
- regular expression's performance can vary - or slow
- charCodeAt
