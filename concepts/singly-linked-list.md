# singly-linked-list

- head, tail, length로 구성된 자료 구조
- node로 구성되어 있고, 각 node는 다른 node 혹은 null을 가리키는 pointer가 있다.
- index가 없다!
- no random access (index가 없기 때문 )

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val)  
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length += 1;
    return this;
  }
  
  // 가장 마지막에 있는 Node를 삭제
  // 마지막 직전 Node의 위치를 바로 알 수 없기 때문에 처음부터 찾아야 한다
  pop() {
      if(!this.head) return undefined;
      var current = this.head;
      var newTail = current;
      while(current.next){
          newTail = current;
          current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
          this.head = null;
          this.tail = null;
      }
      return current;

  } 
  
  // pop() {
  //   if (!this.head || !this.tail) return;
  //   let secondLast = this.head;
  //   let count = 1;
  //   while(count < this.length - 1) {
  //     count++
  //     secondLast = secondLast.next;
  //   }
  //   let temp = this.tail;
  //   this.tail = secondLast;
  //   this.tail.next = null;
  //   this.length--;
  //   return temp;
  // }
  
  traverse() {
    let currentNode = this.head;
    while(currentNode) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

```

- TIL
  - 기존에 내가 작성했던 코드는 List와 Node를 혼동했음
  - temp를 만들어서 이전 node의 next를 옮기는 그런 일을 했는데, `this.tail`과 같은 방식으로 호출하면 문제가 없음