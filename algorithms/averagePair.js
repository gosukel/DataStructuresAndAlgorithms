// Write a function called averagePair.
// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

function averagePair(arr, average) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === average) return true;
    if (avg > average) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

testArr = [1, 2, 3, 4, 5, 6];
testAvg = 3.5;
console.log(averagePair(testArr, testAvg));
// [1, 2, 3, 4, 5, 6, 7]  5
//  l                 r    = 4
//     l              r    = 4.5
//        l           r    = 5   <-----

// [1, 2, 3, 4, 5, 6, 7]  3
//  l                 r    = 4
//  l              r       = 3.5
//  l           r          = 5   <-----
