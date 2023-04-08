/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = [];
  // 1. find index of 0 (define as startIndex)
  let startIndex = 0;

  // check the array contains only minus value
  if (nums[nums.length - 1] < 0) {
    startIndex = nums.length;
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= 0) {
        startIndex = i;
        break;
      }
    }
  }

  // 2. push to result smaller 'value of square' value
  let i = startIndex;
  let j = startIndex - 1;
  while (i < nums.length && j >= 0) {
    const iValueSquare = nums[i] * nums[i];
    const jValueSquare = nums[j] * nums[j];
    if (iValueSquare < jValueSquare) {
      result.push(iValueSquare);
      i++;
    } else if (jValueSquare < iValueSquare) {
      result.push(jValueSquare);
      j--;
    } else {
      result.push(iValueSquare);
      result.push(jValueSquare);
      i++;
      j--;
    }
  }

  // 3. deal with left elements
  // i, j 중 어느하나는 끝에 도달함.
  // j가 끝에 달한 경우
  if (j < 0) {
    for (let k = i; k < nums.length; k++) {
      result.push(nums[k] * nums[k]);
    }
  } else {
    // i가 끝에 달한 경우
    for (let k = j; k >= 0; k--) {
      result.push(nums[k] * nums[k]);
    }
  }

  return result;
};
