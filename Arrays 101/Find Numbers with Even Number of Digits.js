/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0;
  const checkDigit = (num) => {
    let digit = 0;
    while (num >= 1) {
      num = num / 10;
      digit++;
    }

    return digit;
  };

  const isEven = (num) => {
    if (num % 2 === 0) return true;
    return false;
  };

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (isEven(checkDigit(num))) result++;
  }

  return result;
};
