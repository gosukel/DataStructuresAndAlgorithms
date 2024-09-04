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

  find(val, current = this.root) {
    if (current === null) return false;
    if (current.val === val) return true;
    if (val < current.val) {
      return this.find(val, current.left);
    } else {
      return this.find(val, current.right);
    }
  }
}
