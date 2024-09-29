// UNDIRECTED GRAPH
class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
  }

  removeVertex(v) {
    this.adjacencyList[v].forEach((v2) => {
      this.removeEdge(v, v2);
    });
    delete this.adjacencyList[v];
  }

  DFSRecursive(start = Object.keys(g.adjacencyList)[0]) {
    let results = [];
    let visited = {};
    const adjList = this.adjacencyList;

    function recursiveHelper(vertex) {
      if (!vertex) return;
      visited[vertex] = true;
      results.push(vertex);
      adjList[vertex].forEach((v) => {
        if (!visited[v]) {
          return recursiveHelper(v);
        }
      });
    }
    recursiveHelper(start);
    return results;
  }

  DFSIterative(start = Object.keys(g.adjacencyList)[0]) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }

  BFSIterative(start = Object.keys(g.adjacencyList)[0]) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }

  BFSRecursive(start = Object.keys(g.adjacencyList)[0]) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    let adjList = this.adjacencyList;
    visited[start] = true;

    function recursiveHelper() {
      if (!queue.length) return;
      currentVertex = queue.shift();
      result.push(currentVertex);
      adjList[currentVertex].forEach((v) => {
        if (visited[v]) return;
        visited[v] = true;
        queue.push(v);
      });
      recursiveHelper();
    }
    recursiveHelper();
    return result;
  }
}

function makeUndirectedGraph() {
  let g = new UndirectedGraph();
  let vertices = ["A", "B", "C", "D", "E", "F"];
  let edges = [
    ["A", "B"],
    ["A", "C"],
    ["B", "D"],
    ["C", "E"],
    ["D", "E"],
    ["D", "F"],
    ["E", "F"],
  ];
  vertices.forEach((v) => {
    g.addVertex(v);
  });
  edges.forEach((e) => {
    g.addEdge(e[0], e[1]);
  });
  return g;
}

// PRIORITY QUEUE
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

// WEIGHTED GRAPH
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  shortestPath(start, finish) {
    let nodes = new PriorityQueue();
    let distances = {};
    let previous = {};
    let smallest;
    let path = [];

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
      } else {
        distances[vertex] = Infinity;
      }
      nodes.enqueue(vertex, distances[vertex]);
      previous[vertex] = null;
    }

    // while something to visit
    while (nodes.values.length) {
      // smallest = nodes.dequeue().value;
      smallest = nodes.dequeue().value;
      // console.log(smallest);
      if (smallest === finish) {
        // we are done - build up path to return at end
        console.log(distances);
        console.log(previous);
        console.log(smallest);
        while (previous[smallest] || smallest === start) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor];
          console.log(nextNode);
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neigbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enque in priorirty queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    let finalPath = path.reverse();
    // let finalPath = path.concat(smallest).reverse();
    return finalPath;
  }
}

function makeWeightedGraph() {
  let newGraph = new WeightedGraph();
  let vertices = ["A", "B", "C", "D", "E", "F"];
  let edges = [
    ["A", "B", 4],
    ["A", "C", 2],
    ["B", "E", 3],
    ["C", "D", 2],
    ["C", "F", 4],
    ["D", "E", 3],
    ["D", "F", 1],
    ["E", "F", 1],
  ];
  vertices.forEach((v) => {
    newGraph.addVertex(v);
  });
  edges.forEach((e) => {
    newGraph.addEdge(e[0], e[1], e[2]);
  });
  return newGraph;
}

let graph = makeWeightedGraph();
console.log(graph.adjacencyList);
console.log(graph.shortestPath("A", "E"));
// console.log(graph.shortestPath());
