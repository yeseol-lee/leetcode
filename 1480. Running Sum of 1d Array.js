/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = [nums[0]];

  for (i = 1; i < nums.length; i++) {
    const value = result[i - 1] + nums[i];
    result.push(value);
  }

  return result;
};
