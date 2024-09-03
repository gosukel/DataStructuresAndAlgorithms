// write a function called sumZero which accepts a SORTED array of integers
// The function should find the FIRST pair where the sum is 0
// Return an array that includes both values that sum to zero, or UNDEFINED if a pair does not exist

// let arr = [-2, -1, 0, 1, 2, 3];
// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) return [arr[left], arr[right]];
//     if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// console.log(sumZero(arr));

// implement a functino called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// there can be negative numbers in the array, but it will always be sorted.
// while left and right is less than arr.length
//

// function countUniqueValues(arr) {
//   let count = 0;
//   if (arr.length < 1) return count;
//   if (arr.length === 1) return 1;
//   let left = 0;
//   let right = left + 1;
//   count++;
//   while (right < arr.length) {
//     // console.log(left);
//     // console.log(right);
//     // console.log(arr);
//     if (arr[left] === arr[right]) {
//       right++;
//     } else {
//       count++;
//       left++;
//       arr[left] = arr[right];
//     }
//     // console.log(`count is ${count}`);
//   }
//   return left + 1;
// }
let i = 1;
let j = 3;
// 1, 4, 9
// max 14
// temp 0
// i 1
// 4, 9, 12
// temp 25
// max 25
newArr = [1, 4, 9, 12, 22, 31, 55, 60];
console.log(newArr[i + j]);
// console.log(countUniqueValues(newArr));
