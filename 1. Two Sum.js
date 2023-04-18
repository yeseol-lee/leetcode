/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 1. target 보다 크다 -> 패스
  // 2. 순회하며 object에 저장
  // object: { 7: 0, 6: 1, ...}
  // 3. 더해서 target이 되는 값이 있는지 체크

  let hashmap = {};

  let result = [];

  let i = 0;
  while (i < nums.length) {
    const num = nums[i];
    const pairNum = target - num;

    if (hashmap[pairNum] !== undefined) {
      result.push(hashmap[pairNum]);
      result.push(i);
      break;
    }

    // hashmap에 값 등록하기
    hashmap[num] = i;

    i++;
  }

  return result;
};
