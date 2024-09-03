function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      // console.log(minLen);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
let testArr = [1, 2, 3, 4, 5, 6, 7, 8];
let num = 9;

minSubArrayLen(testArr, num);
// nums(array), sum
// total, start, end, minLen(3)
// [1, 2, 3, 4, 6, 5, 7, 8]  9
//  se                       0
//  s  e                     1
//  s     e                  3
//  s        e               6
//  s        e               10
//
