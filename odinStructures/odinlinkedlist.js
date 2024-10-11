class Node {
  constructor(key, val) {
    this.key = key;
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  listAllKeys() {
    let keys = [];
    let curNode = this.head;
    while (curNode) {
      keys.push(curNode.key);
      curNode = curNode.next;
    }
    return keys;
  }

  listAllVals() {
    let vals = [];
    let curNode = this.head;
    while (curNode) {
      vals.push(curNode.value);
      curNode = curNode.next;
    }
    return vals;
  }

  listAll() {
    let all = [];
    let curNode = this.head;
    while (curNode) {
      all.push([curNode.key, curNode.value]);
      curNode = curNode.next;
    }
    return all;
  }

  toString() {
    let vals = this.listAll();
    let strVals = "";
    for (let val of vals) {
      strVals = strVals + `( ${val} ) -> `;
    }
    strVals = strVals + `null`;
    console.log(strVals);
  }

  append(key, val) {
    let newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return;
  }

  prepend(key, val) {
    let newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return;
  }

  pop() {
    if (!this.tail) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return;
    let returnNode = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = returnNode.next;
    }
    returnNode.next = null;
    this.size--;
    return returnNode;
  }

  at(idx) {
    if (idx >= this.size || idx < 0) return undefined;
    let curNode = this.head;
    for (let i = 0; i <= idx - 1; i++) {
      curNode = curNode.next;
    }
    return curNode;
  }

  containsVal(val) {
    if (this.size === 0) return false;
    let curNode = this.head;
    if (curNode.value === val) return true;
    while (curNode) {
      if (curNode.next && curNode.next.value === val) return true;
      curNode = curNode.next;
    }
    return false;
  }

  containsKey(key) {
    if (this.size === 0) return false;
    let curNode = this.head;
    if (curNode.key === key) return true;
    while (curNode) {
      if (curNode.next && curNode.next.key === key) return true;
      curNode = curNode.next;
    }
    return false;
  }

  findVal(val) {
    if (this.size === 0) return null;
    let curNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (curNode.value === val) return i;
      curNode = curNode.next;
    }
    return null;
  }

  findKey(key) {
    if (this.size === 0) return null;
    let curNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (curNode.key === key) return i;
      curNode = curNode.next;
    }
    return null;
  }

  findAndReturnNode(key) {
    if (this.size === 0) return null;
    let curNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (curNode.key === key) return curNode;
      curNode = curNode.next;
    }
    return null;
  }

  set(idx, val) {
    let target = this.at(idx);
    if (!target) return false;
    target.value = val;
    return true;
  }

  insert(idx, key, val) {
    if (idx < 0 || idx > this.size) return false;
    if (idx === this.size) {
      this.append(val);
      return true;
    }
    if (idx === 0) {
      this.prepend(val);
      return true;
    }
    let newNode = new Node(key, val);
    let prevNode = this.at(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.size++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.size) return false;
    if (idx === 0) return this.shift();
    if (idx === this.size - 1) return this.pop();
    let prevNode = this.at(idx - 1);
    let removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = null;
    return removedNode;
  }

  reverse() {
    if (this.size === 0) return this;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next;
    for (let i = 0; i < this.size; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
}

export { LinkedList, Node };
