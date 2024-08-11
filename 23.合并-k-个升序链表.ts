/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let nlen = lists.length
    if (nlen === 0) return null
    if (nlen === 1) return lists[0]
    let l1 = mergeKLists(lists.slice(0, nlen/2))
    let l2 = mergeKLists(lists.slice(nlen/2))
    return mergeTwoLists(l1, l2)
};
function mergeTwoLists(lists1: ListNode | null,lists2: ListNode | null): ListNode | null {
  if (!lists1 ||!lists2) return lists1 || lists2
  if (lists1.val <= lists2.val) {
    lists1.next = mergeTwoLists(lists1.next, lists2)
    return lists1
  } else {
    lists2.next = mergeTwoLists(lists1, lists2.next)
    return lists2
  }
}
// @lc code=end

