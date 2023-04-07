/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  let lastIndex = nums.length - 1;

  while (k < lastIndex) {
    if (nums[k] !== val) {
      k++;
    } else {
      nums[k] = nums[lastIndex];
      lastIndex--;
    }
  }

  // for the exception of last element, check outside of loop
  if (nums[k] !== val) return k + 1;
  else return k;
};
