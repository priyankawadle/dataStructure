// Remove Nth node from end of the Linked List
// Input : LinkedList = 1 ->2 ->3 ->4 ->5 , N = 2
// Output : 1 ->2 ->3 ->5
// Input : LinkedList = 7 ->8 ->4 ->3 ->2 , N = 1
// Output : 7 ->8 ->4 ->3
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
  }
  removeNthEleEnd(N) {
    let current = this.head;
    let length = 0;
    while (current !== null) {
      length++;
      current = current.next;
    }

    let frontIndex = length - N;
    let count = 0;

    current = this.head;
    if (frontIndex === 0) {
      this.head = current.next;
      this.head.next = current.next.next;
    } else {
      while (count < frontIndex - 1) {
        current = current.next;
        count++;
      }
      let next = current.next.next;
      current.next = next;
    }
  }
}
const list = new LinkedList(1);
list.head.next = {
  value: 2,
  next: {
    value: 3,
    next: {
      value: 4,
      next: {
        value: 5,
        next: null,
      },
    },
  },
};
console.log(list.head);
list.removeNthEleEnd(5);
console.log(list.head);
