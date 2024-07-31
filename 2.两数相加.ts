/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 ===null || l2 === null) {
    if ( !l1 && !l2) return null
    if (l1) {
      if (l1.val >= 10) {
        l1.val = l1.val % 10
        if (l1.next) {
          l1.next.val = l1.next.val + 1
        } else {
          l1.next = {val: 1, next: null}
        }
        l1.next = addTwoNumbers(l1.next, null)
      }
      return l1
    }
    if (l2) {
      if (l2.val >= 10) {
        l2.val = l2.val % 10
        if (l2.next) {
          l2.next.val = l2.next.val + 1
        } else {
          l2.next = {val: 1, next: null}
        }
        l2.next = addTwoNumbers(null, l2.next)
      }
      return l2
    }
  }
  let result = { val: 0, next: null}
  let val = l1.val + l2.val
  result.val = val % 10
  if (val >= 10) {
    if (l1.next) {
      l1.next.val += 1
    } else {
      l1.next = {val: 1, next: null}
    }
  }
  result.next = addTwoNumbers(l1.next ?? null, l2.next ?? null)
  return result
};
// @lc code=end

