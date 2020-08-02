/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 解法1 快慢指针
var hasCycle = function (head) {
  if (!head || !head.next) return false
  let fast = head, slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  if (!fast || !fast.next) {
    return false
  }
}

// 解法二 给节点添加标记 不断遍历 如果标记存在则为循环
var hasCycle = function (head) {
  if (!head || !head.next) return false
  let current = head
  while (current && current.next) {
    if (current.target === true) return true
    current.target = true
    current = current.next
  }
  return false
}