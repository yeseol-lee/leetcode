/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  let i = 1;

  while (i < nums.length) {
    if (nums[k] == nums[i]) {
      i++;
    } else {
      nums[k + 1] = nums[i];
      k++;
      i++;
    }
  }

  k++;
  return k;
};
