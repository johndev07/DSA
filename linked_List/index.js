class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    let newNode = new Node(data);
    Node.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    let newNode = new Node(data);
    let current = this.head;
    if (!current) {
      this.head = newNode;
      return;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  addAt(data, index) {
    let size = this.size();
    if (index > size || index < 0) {
      console.error("Invalid Index");
      return;
    }

    if (index === 0) {
      this.addFirst(data);
      return;
    }
    let current = this.head;
    let count = 0;
    const newNode = new Node(data);
    while (current) {
      count++;
      if (count === index) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
    }
  }

  removeTop() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    let current = this.head;
    if (!current) return;
    let next = null;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  removeAt(index) {
    let size = this.size();
    if (index < 0 || index > size) {
      console.error("Invalid Index");
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      if (count === index) {
      }
      current = current.next;
    }
  }
}
