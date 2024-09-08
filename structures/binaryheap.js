class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    if (this.values.length === 1) return;
    const bubbleUp = (index = this.values.length - 1) => {
      if (index <= 0) return;
      let elementIndex = index;
      let element = this.values[elementIndex];
      let parentIndex = Math.floor(elementIndex - 1 / 2);
      let parent = this.values[parentIndex];
      if (element < parent) return;
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
      bubbleUp(elementIndex);
    };
    bubbleUp();
  }
  // remove
  extractMax() {
    if (this.values.length === 0) return null;
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length === 0) return max;
    this.values[0] = end;

    const sinkDown = () => {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[idx];
      while (true) {
        let leftChildIndex = 2 * idx + 1;
        let rightChildIndex = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild > element) {
            swap = leftChildIndex;
          }
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (rightChild > element && rightChild > leftChild) {
            swap = rightChildIndex;
          }
        }

        if (!swap) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    };
    sinkDown();
    return max;
  }
}

// PRIORITY QUEUE USING MIN BINARY HEAP
class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    if (this.values.length === 1) return;
    const bubbleUp = (index = this.values.length - 1) => {
      if (index <= 0) return;
      let elementIndex = index;
      let element = this.values[elementIndex];
      let parentIndex = Math.floor(elementIndex - 1 / 2);
      let parent = this.values[parentIndex];
      if (element.priority > parent.priority) return;
      this.values[parentIndex] = element;
      this.values[elementIndex] = parent;
      elementIndex = parentIndex;
      bubbleUp(elementIndex);
    };
    bubbleUp();
  }
  // remove
  dequeue() {
    if (this.values.length === 0) return null;
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length === 0) return max;
    this.values[0] = end;

    const sinkDown = () => {
      let idx = 0;
      const length = this.values.length;
      const element = this.values[idx];
      while (true) {
        let leftChildIndex = 2 * idx + 1;
        let rightChildIndex = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIndex < length) {
          leftChild = this.values[leftChildIndex];
          if (leftChild.priority < element.priority) {
            swap = leftChildIndex;
          }
        }
        if (rightChildIndex < length) {
          rightChild = this.values[rightChildIndex];
          if (
            rightChild.priority < element.priority &&
            rightChild.priority < leftChild.priority
          ) {
            swap = rightChildIndex;
          }
        }

        if (!swap) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    };
    sinkDown();
    return max;
  }
}
