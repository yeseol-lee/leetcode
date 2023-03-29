/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let currentMaxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    // if num is 0, update maxCount
    if (nums[i] === 0) {
      if (maxCount < currentMaxCount) maxCount = currentMaxCount;
      currentMaxCount = 0;
    } else {
      currentMaxCount += 1;
    }
  }
  if (maxCount < currentMaxCount) maxCount = currentMaxCount;

  return maxCount;
};
