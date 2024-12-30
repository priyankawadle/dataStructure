class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
  }
  detectCycle() {
    console.log(this.head);
    let current = this.head;
    let set = new Set();
    while (current !== null) {
      if (!set.has(current.value)) {
        set.add(current.value);
      } else {
        return " cycle formed";
      }
      current = current.next;
    }
    return "cycle not formed";
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
          value: 1,
          next: null,
        },
      },
    },
  },
};
const result = list.detectCycle();
console.log(result);
