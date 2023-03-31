// [ -3 -1 0 2 3]
// [ -3 -1 2 3 4]

var findNumbers = function (nums) {
  let result = [];
  // 1. find index of 0
  let startIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      startIndex = i;
      return;
    }
  }

  // 2. push to result 'value of square' is small one
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

  // i, j 중 어느하나는 끝에 도달함.
  // j가 끝에 달한 경우
  if (j < 0) {
    for (let k = i; k < nums.length; k++) {
      result.push(nums[k] * nums[k]);
    }
  } else {
    // i가 끝에 달한 경우
  }
};
