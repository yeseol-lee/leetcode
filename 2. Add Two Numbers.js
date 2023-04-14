/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = [];
  // 각 자리의 합이 10이 넘으면 true로 바꿔줌
  let add10 = false;

  do {
    let sum = add10 ? 1 + l1.val + l2.val : l1.val + l2.val;
    if (sum >= 10) {
      sum -= 10;
      add10 = true;
    } else {
      add10 = false;
    }
    result.push(sum);
  } while (l1.next && l2.next);
};
