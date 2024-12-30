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
  deleteLastOcc(key) {
    let current = this.head;
    let arr = [];
    let count = 0;
    while (current != null) {
      count = count + 1;
      if (current.value === key) {
        arr.push(count);
      }
      current = current.next;
    }
    let indexToDelete = arr[arr.length - 1];
    console.log(indexToDelete);
    current = this.head;
    count = 1;
    while (count < indexToDelete - 1) {
      current = current.next;
      count++;
    }

    let next = current.next.next;
    current.next = next;

    return this.head;
  }
}
const list = new LinkedList(1);
list.head.next = {
  value: 2,
  next: {
    value: 2,
    next: {
      value: 3,
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
console.log(list.head);

list.deleteLastOcc(2);
console.log(list.head);
