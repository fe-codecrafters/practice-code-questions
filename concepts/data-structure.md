# What is Data Structure?

자료구조는 값들의 조합(collections of values), 값들간의 관계, 값들에 적용할 수 있는 작업, 함수 등을 총칭한다.
자주 사용하는 자료구조도 있고, 거의 사용하지 않는 경우도 있다.

- 지도 -> 그래프 자료구조
- 자료구조 앞뒤로 추가/삭제를 빠르게 해야 하는 경우 -> 링크드 리스트
- HTML, DOM -> Tree
- 스케쥴러 -> 바이너리 힙

## JavaScript Class

```javascript
// Class
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.isLate = false;
    this.scores = [];
  }
  getFullName() {
    return 'Full Name: ' + this.firstName + ' ' + this.lastName;
  }
  markLate() {
    this.isLate = true;
    return 'isLate: ' + this.isLate;
  }
  addScore(score) {
    this.scores.push(score)
    return 'Score: ' + this.addScore;
  }
  getAvg() {
    let sum = this.scores.reduce(function(a,b){return a+b;})
    return sum / this.scores.length;
  }
  static EnrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}

// Instance, 인스턴스, 인스턴스 객체
const firstStudent = new Student('Jone', 'Doe');
const secondStudent = new Student('Will', 'Smith');

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  // 클래스가 소유하고 있는 메서드; 정적 메서드
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

// 두 점 간의 거리를 구하기 위해서 p1, p2 인스턴스의 메서드를 쓰는 것 보다는
// 클래스 자체에 메서드가 있는게 직관적이h.
const distance = Point.distance(p1, p2)
```


