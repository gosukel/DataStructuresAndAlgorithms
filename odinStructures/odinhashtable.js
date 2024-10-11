import { LinkedList, Node } from "./odinlinkedlist.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.8;
    this.buckets = [];
    this.size = 0;
  }

  length() {
    return this.size;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, val) {
    if (this.size + 1 >= this.capacity * this.loadFactor) {
      this.grow();
    }
    let idx = this.hash(key);
    // if index empty
    if (!this.buckets[idx]) {
      let newList = new LinkedList();
      newList.append(key, val);
      this.buckets[idx] = newList;
      this.size++;
      return true;
    } else {
      // check for existing same key
      let curItem = this.buckets[idx];
      let foundIdx = curItem.findKey(key);
      if (foundIdx === null) {
        // if key does not exist, add new key and val node
        curItem.append(key, val);
        this.size++;
        // console.log("collision found");
        return true;
      } else {
        // if key exists, change val of existing node
        curItem.set(foundIdx, val);
        return true;
      }
    }
    return false;
  }

  get(key) {
    let idx = this.hash(key);
    if (!this.buckets[idx]) return null;
    let curItem = this.buckets[idx];
    let foundNode = curItem.findAndReturnNode(key);
    if (!foundNode) return null;
    return foundNode.value;
  }

  has(key) {
    let foundNode = this.get(key);
    if (foundNode) return true;
    return false;
  }

  remove(key) {
    // fast check for removal validity
    let canRemove = this.has(key);
    if (!canRemove) return false;
    let bucketIdx = this.hash(key);
    let nodeIdx = this.buckets[bucketIdx].findKey(key);
    this.buckets[bucketIdx].remove(nodeIdx);
    this.size--;
    return true;
  }

  clear() {
    this.capacity = 16;
    this.loadFactor = 0.8;
    this.buckets = [];
    this.size = 0;
  }

  keys() {
    let keys = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        let addKeys = bucket.listAllKeys();
        keys = [...keys, ...addKeys];
      }
    }
    return keys;
  }

  values() {
    let vals = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        let addVals = bucket.listAllVals();
        vals = [...vals, ...addVals];
      }
    }
    return vals;
  }

  entries() {
    let entries = [];
    let addEntries;
    for (let bucket of this.buckets) {
      if (bucket) {
        addEntries = bucket.listAll();
        for (let item of addEntries) {
          entries.push(item);
        }
      }
    }
    return entries;
  }

  grow() {
    console.log("growing");
    let curEntries = this.entries();
    this.capacity = this.capacity * 2;
    this.buckets = [];
    this.size = 0;
    for (let entry of curEntries) {
      this.set(entry[0], entry[1]);
    }
  }
}

let test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("weight", "fat");
test.set("age", "old");

console.log(test.entries());
console.log(test.length());
test.clear();
console.log(test.entries());
console.log(test.length());
