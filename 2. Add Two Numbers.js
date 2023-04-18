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
  let currentNode = new ListNode();
  let headNode = currentNode;

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

    let newNode = new ListNode(sum);
    currentNode.next = newNode;
    currentNode = newNode;
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
      let newNode = new ListNode(sum);
      currentNode.next = newNode;
      currentNode = newNode;
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
      let newNode = new ListNode(sum);
      currentNode.next = newNode;
      currentNode = newNode;
    }
  } else {
    if (add10) {
      let newNode = new ListNode(1);
      currentNode.next = newNode;
      currentNode = newNode;

      add10 = false;
    }
  }

  // 마지막으로 add10 체크
  if (add10) {
    let newNode = new ListNode(1);
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return headNode.next;
};
