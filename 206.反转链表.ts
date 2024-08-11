/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null
    let prev: ListNode | null = null
    let curr: ListNode | null = head
    while (curr !== null) {
      let nextTemp = curr.next
      curr.next = prev
      prev = curr
      curr = nextTemp
    }
    return prev
};
// @lc code=end

