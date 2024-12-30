class ReverseList {
  constructor(value) {
    (this.head = {
      value: value,
      next: null,
    }),
      (this.tail = this.head);
  }

  reverse() {
    let prev = null;
    let next;
    let current = this.head;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}
const list = new ReverseList(5);
list.head.next = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: 40,
        next: null,
      },
    },
  },
};
console.log(list.reverse());
