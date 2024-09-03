// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   let freqCounter1 = {};
//   for (let val of arr1) {
//     freqCounter1[val] = (freqCounter1[val] || 0) + 1;
//     // (if key already exists, use cur val, else create key with val 0) + 1
//   }
//   let freqCounter2 = {};
//   for (let val of arr2) {
//     freqCounter2[val] = (freqCounter2[val] || 0) + 1;
//     // (if key already exists, use cur val, else create key with val 0) + 1
//   }

//   for (let key in freqCounter1) {
//     if (!(key ** 2 in freqCounter2)) return false;
//     if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
//   }
//   console.log(freqCounter1);
//   console.log(freqCounter2);
//   return true;
// }

// array1 = [1, 1, 5, 2, 3];
// array2 = [25, 4, 1, 9, 1];

// console.log(same(array1, array2));

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as "cinema" and "iceman".

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      console.log("caught");
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      console.log("caught 2");
      return false;
    }
  }
  return true;
}

// console.log(validAnagram("", ""));

function sameFrequency(x, y) {
  // good luck. Add any arguments you deem necessary.
  let num1 = x.toString();
  let num2 = y.toString();

  let obj1 = {};
  let obj2 = {};
  for (let num of num1) {
    obj1[num] = (obj1[num] || 0) + 1;
  }
  for (let num of num2) {
    obj2[num] = (obj2[num] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  for (let key in obj2) {
    if (!(key in obj1)) return false;
    if (obj2[key] !== obj1[key]) return false;
  }

  return true;
}

let x = 1414;
let y = 41124;

console.log(sameFrequency(x, y));
