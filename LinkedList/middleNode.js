// Find Middle of the Linked List
// nput: linked list = 10 -> 20 -> 30 -> 40 -> 50 -> 60
// Output: 40
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
  }
  middleNode() {
    let current = this.head;
    let length = 0;
    while (current !== null) {
      length++;
      current = current.next;
    }
    let mid_index = Math.floor(length / 2);
    current = this.head;
    let count = 0;
    while (count < mid_index) {
      current = current.next;
      count++;
    }
    console.log("current", current);
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
        next: {
          value: 6,
          next: null,
        },
      },
    },
  },
};
list.middleNode();
