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

// result를 linkedList 형식으로 만드는것에 어려움을 겪고 있음
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let currentResult = result;

  // 각 자리의 합이 10이 넘으면 true로 바꿔줌
  let add10 = false;

  do {
    let sum = add10 ? 1 + l1.val + l2.val : l1.val + l2.val;

    // linked list 다음값으로 넘겨줌
    l1 = l1.next;
    l2 = l2.next;

    if (sum >= 10) {
      sum -= 10;
      add10 = true;
    } else {
      add10 = false;
    }
    result.next = sum;
    currentResult = result.next;
  } while (l1 && l2);

  if (l1) {
    while (l1) {
      let sum = add10 ? l1.val + 1 : l1.val;

      l1 = l1.next;

      if (sum >= 10) {
        sum -= 10;
        add10 = true;
      } else {
        add10 = false;
      }
      result.next = sum;
      currentResult = result.next;
    }
  } else if (l2) {
    while (l2) {
      let sum = add10 ? l2.val + 1 : l2.val;

      l2 = l2.next;

      if (sum >= 10) {
        sum -= 10;
        add10 = true;
      } else {
        add10 = false;
      }
      result.next = sum;
      currentResult = result.next;
    }
  } else {
    if (add10) {
      result.next = 1;
      currentResult = result.next;
    }
  }

  return result;
};
