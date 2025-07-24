"use strict";
class LinkNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
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
    addFirst(data) {
        const newNode = new LinkNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(data) {
        const newNode = new LinkNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    addAt(data, position) {
        if (position > this.size() || position < 0) {
            console.error("Invalid position");
            return;
        }
        const newNode = new LinkNode(data);
        let current = this.head;
        if (position === 0) {
            this.addFirst(data);
            return;
        }
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    removeFirst() {
        if (!this.head)
            return;
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head)
            return;
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
    removeAt(position) {
        if (position < 0 || position > this.size()) {
            console.error("Invalid position");
            return;
        }
        if (position === 0) {
            this.removeFirst();
        }
        let current = this.head;
        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }
    print() {
        if (!this.head) {
            console.error("No List");
            return;
        }
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const linkedList = new LinkedList();
linkedList.addFirst(5);
linkedList.addFirst(3);
linkedList.addFirst(8);
linkedList.addLast(9);
linkedList.removeFirst();
linkedList.addAt(2, 2);
linkedList.addAt(5, 8);
linkedList.removeLast();
linkedList.print();
console.log("size", linkedList.size());
