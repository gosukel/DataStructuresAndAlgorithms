function mergeSort(arr) {
  let mergeHelper = (leftArr, rightArr) => {
    let sorted = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sorted.push(leftArr.shift());
      } else {
        sorted.push(rightArr.shift());
      }
    }
    return [...sorted, ...leftArr, ...rightArr];
  };

  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let leftArr = mergeSort(arr.slice(0, mid));
  let rightArr = mergeSort(arr.slice(mid));

  return mergeHelper(leftArr, rightArr);
}

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class OdinBST {
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
      if (val < current.value) {
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

  findNode(val, current = this.root) {
    if (current === null) return undefined;
    if (current.value === val) return current;
    if (val < current.value) {
      return this.findNode(val, current.left);
    } else {
      return this.findNode(val, current.right);
    }
  }

  remove(data, node = this.root) {
    if (node === null) return node;
    if (data < node.value) {
      node.left = this.remove(data, node.left);
    } else if (data > node.value) {
      node.right = this.remove(data, node.right);
    } else {
      // CASE 1: NO CHILD
      if (!node.left && !node.right) {
        node = null;
        return node;
        // CASE 2: ONE CHILD NODE
      } else if (!node.left || !node.right) {
        if (node.left) {
          let temp = node;
          node = node.left;
        } else {
          node = node.right;
        }
        return node;
        // CASE 3: TWO CHILD NODE
      } else {
        function findMin(root = node.right) {
          if (!root.left) {
            return root;
          }
          findMin(root.left);
        }
        let min = findMin();
        node.value = min.value;
        node.right = this.remove(min.value, node.right);
      }
    }
    return node;
  }

  levelOrder() {
    let queue = [this.root];
    let data = [];
    let node;
    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  inOrder() {
    if (!this.root) return undefined;
    let values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

  preOrder() {
    if (!this.root) return undefined;
    let values = [];
    const traverse = (node) => {
      values.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return values;
  }

  postOrder() {
    if (!this.root) return undefined;
    let values = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    };
    traverse(this.root);
    return values;
  }

  valHeight(val = this.root.value) {
    let height;
    let node = this.findNode(val);
    function checkHeight(node) {
      if (node === null) return -1;
      let left = checkHeight(node.left);
      let right = checkHeight(node.right);
      return Math.max(left, right) + 1;
    }
    height = checkHeight(node);
    return height;
  }

  nodeHeight(node = this.root) {
    let height;
    function checkHeight(n) {
      if (n === null) return -1;
      let left = checkHeight(n.left);
      let right = checkHeight(n.right);
      return Math.max(left, right) + 1;
    }
    height = checkHeight(node);
    return height;
  }

  depth(val = this.root.value) {
    let depth = 0;
    let node = this.root;
    function checkDepth(val, current) {
      if (current === null) return 0;
      if (current.value === val) return 0;
      if (val < current.value) {
        return checkDepth(val, current.left) + 1;
      } else {
        return checkDepth(val, current.right) + 1;
      }
    }
    depth = checkDepth(val, node);
    return depth;
  }

  isBalanced(node = this.root) {
    if (node === null) return true;
    let leftHeight = this.nodeHeight(node.left);
    let rightHeight = this.nodeHeight(node.right);

    if (Math.abs(rightHeight - leftHeight) > 1) return false;

    let left = this.isBalanced(node.left);
    let right = this.isBalanced(node.right);

    if (!left || !right) return false;

    return true;
  }

  selfBalance() {
    let vals = this.inOrder();
    this.root = null;
    this.buildTree(vals);
    return this.isBalanced();
  }

  prepValues() {
    let arr = [1, 7, 3, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
    let sortedArr = mergeSort(arr);
    let readyArr = [...new Set(sortedArr)];
    return readyArr;
  }

  buildTree(arr = this.prepValues(), start = 0, end = arr.length - 1) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let newNode = new Node(arr[mid]);
    if (!this.root) {
      this.root = newNode;
    }
    newNode.left = this.buildTree(arr, start, mid - 1);
    newNode.right = this.buildTree(arr, mid + 1, end);
    return newNode;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

// TEST FUNCTION
function testDrive() {
  function getVals() {
    let vals = [];
    let x;
    for (let i = 0; i < 50; i++) {
      x = Math.floor(Math.random() * 1000) + 1;
      vals.push(x);
    }
    return vals;
  }
  let vals = getVals();
  let sortedVales = mergeSort(vals);
  let newTree = new OdinBST();
  newTree.buildTree(sortedVales);
  console.log(newTree.isBalanced());
  newTree.prettyPrint();
  console.log(newTree.inOrder());
  console.log(newTree.postOrder());
  console.log(newTree.levelOrder());
  newTree.insert(1005);
  newTree.insert(1006);
  newTree.insert(1007);
  newTree.insert(1008);
  newTree.insert(1009);
  newTree.prettyPrint();
  console.log(newTree.isBalanced());
  console.log(newTree.inOrder());
  console.log(newTree.postOrder());
  console.log(newTree.levelOrder());
}
