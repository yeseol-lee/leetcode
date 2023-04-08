/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let currentIndex = 0;
  while (currentIndex < arr.length - 1) {
    if (arr[currentIndex] != 0) {
      currentIndex++;
    } else {
      // Hmm..
      if (currentIndex == arr.length - 2) arr[arr.length - 1] = 0;
      // array slide to right
      let nextValue = arr[currentIndex + 1];
      for (let i = currentIndex + 1; i < arr.length - 1; i++) {
        const temp = arr[i + 1];
        arr[i + 1] = nextValue;
        nextValue = temp;

        arr[currentIndex + 1] = 0;
      }
      currentIndex += 2;
    }
  }

  return arr;
};
