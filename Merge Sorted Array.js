/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return  anything, modify nums1 in-place instead.
 */

// trouble shooting ㅎㅏ느ㄴ중
var merge = function (nums1, m, nums2, n) {
  let nums2Index = 0;

  //         /
  //   123 / 256;
  //     /

  for (let nums1Index = 0; nums1Index < m; nums1Index++) {
    if (nums2[nums2Index] >= nums1[nums1Index]) {
      console.log('if nums1: ', nums1);
      console.log('nums1Index: ', nums1Index);
      console.log('nums2Index: ', nums2Index);

      continue;
    }
    while (nums2[nums2Index] < nums1[nums1Index] && nums2Index < n) {
      // shift nums1 from nums1Index
      console.log('while nums1: ', nums1);
      console.log('nums1Index: ', nums1Index);
      console.log('nums2Index: ', nums2Index);

      let savedValue = nums1[nums1Index];
      for (let i = nums1Index; i < m - 1; i++) {
        let temp = nums1[i + 1];
        nums1[i + 1] = savedValue;
        savedValue = temp;
      }
    }
    // put smaller nums2 value to empty nums1's place
    nums1[nums1Index] = nums2[nums2Index];
    nums2Index++;
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 6, [2, 5, 6], 3));
