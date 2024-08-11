/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let p = {val: null, next: head} as any
    let f = head
    let s = p
     // p => 1 => 2 => 3 => 4 => 5 => null
     // s              f
    for (let i = 0; i < n; i++) {
      f = f.next
    }
    while (f) {
      f = f.next
      s = s.next
    }
    s.next = s.next.next
    return p.next
};
// @lc code=end

