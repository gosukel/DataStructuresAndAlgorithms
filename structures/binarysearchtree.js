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
  fillTree(values = [1, 2, 3, 4, 5, 6]) {
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
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    if (!this.root) return undefined;
    let values = [];
    const traverse = (node) => {
      values.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return values;
  }

  DFSInOrder() {
    if (!this.root) return undefined;
    let values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      values.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return values;
  }

  DFSPostOrder() {
    if (!this.root) return undefined;
    let values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.val);
    };

    traverse(this.root);
    return values;
  }

  balanceBST() {
    let vals = this.DFSInOrder();
    let mid = Math.floor(vals.length / 2);
    let head = new Node(vals[mid]);
    let left = vals.slice(0, mid);
    let right = vals.slice(mid + 1);
    let newVals = [...left, ...right];
    this.root = head;
    this.fillTree(newVals);
  }
}

// -------------- TESTING CODE ------------
let tree = new BinarySearchTree();
tree.fillTree();
console.log(tree.DFSPreOrder());
tree.balanceBST();
console.log(tree.breadthFirstSearch());
