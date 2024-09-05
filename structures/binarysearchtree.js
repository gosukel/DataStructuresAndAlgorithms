import { QNode, Queue } from "./queue.js";

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    const inserted = (val, current = this.root) => {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        return inserted(val, current.left);
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        return inserted(val, current.right);
      }
    };
    return inserted(val);
  }

  // ------  FOR TESTING -------
  fillTree() {
    let values = [10, 6, 15, 3, 8, 20];
    for (let val of values) {
      this.insert(val);
    }
    console.log("items inserted");
  }
  // ---------------------------

  find(val, current = this.root) {
    if (current === null) return false;
    if (current.val === val) return true;
    if (val < current.val) {
      return this.find(val, current.left);
    } else {
      return this.find(val, current.right);
    }
  }

  breadthFirstSearch() {
    const queue = new Queue();
    const data = [];
    let node = this.root;
    queue.enqueue(node);
    while (queue.size > 0) {
      node = queue.dequeue().val;
      data.push(node.val);
      console.log(node);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return data;
  }
}

// -------------- TESTING CODE ------------
let tree = new BinarySearchTree();
tree.fillTree();
let vals = tree.breadthFirstSearch();
console.log(vals);
