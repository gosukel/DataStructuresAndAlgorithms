class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  getVals() {
    let returnArray = [];
    let current = this.head;
    while (current) {
      returnArray.push(current.val);
      current = current.next;
    }
    return returnArray;
  }

  pop() {
    if (!this.tail) return undefined;
    let removed = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }

  emptyList() {
    while (this.head) {
      this.pop();
    }
  }

  shift() {
    if (!this.head) return undefined;
    let removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }

  unshift(val) {
    let newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    let target;
    let count;
    if (index <= this.length / 2) {
      count = 0;
      target = this.head;
      while (count !== index) {
        target = target.next;
        count++;
      }
    } else {
      count = this.length - 1;
      target = this.tail;
      while (count !== index) {
        target = target.prev;
        count--;
      }
    }
    return target;
  }

  set(index, val) {
    let target = this.get(index);
    if (!target) return false;
    target.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;
    let newNode = new Node(val);
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let afterNode = removedNode.next;
    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    if (this.length === 0 || this.length === 1) return this;
    let current = this.head;
    let temp;
    this.head = this.tail;
    this.tail = current;
    while (current) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
    }
    return this;
  }
}

function makeList(length, range) {
  let newList = new DoublyLinkedList();
  counter = 0;
  while (counter < length) {
    let rng = Math.floor(Math.random() * range) + 1;
    newList.push(rng);
    counter++;
  }
  return newList;
}
