class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  getVals() {
    let returnArray = [];
    let current = this.first;
    while (current) {
      returnArray.push(current.val);
      current = current.next;
    }
    return returnArray;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      [this.first, this.last] = [newNode, newNode];
    } else {
      [this.last.next, this.last] = [newNode, newNode];
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    let currentFirst = this.first;
    this.first = currentFirst.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return currentFirst;
  }
}
