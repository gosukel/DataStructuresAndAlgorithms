class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      [this.first, this.last] = [newNode, newNode];
    } else {
      [this.first, newNode.next] = [newNode, this.first];
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.first) return undefined;
    // console.log(this.first);
    let currentFirst = this.first;
    this.first = currentFirst.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return currentFirst;
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
}
