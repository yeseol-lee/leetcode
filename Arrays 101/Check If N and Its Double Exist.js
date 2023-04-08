/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let double = {};

  for (let i = 0; i < arr.length; i++) {
    if (double[arr[i] * 2] || double[arr[i] / 2]) {
      return true;
    } else {
      double[arr[i]] = true;
    }
  }

  return false;
};
