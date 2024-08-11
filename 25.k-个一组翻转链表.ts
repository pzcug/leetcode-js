/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class any {
 *     val: number
 *     next: any | null
 *     constructor(val?: number, next?: any | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

let a1 = {val:1, next: null} as any
let a2 = {val:2, next: null} as any
let a3 = {val:3, next: null} as any
let a4 = {val:4, next: null} as any
let a5 = {val:5, next: null} as any
 a1.next = a2
 a2.next = a3
 a3.next = a4
 a4.next = a5
function reverseKGroup(head: any | null, k: number): any | null {
  // 保护节点
  let ptv = {val: 0,next: head}
  let prev = ptv
  let left = head
  while(left !== null) {
    let right = getEnd(left, k)
    if (right === null) break
    let nextHead = right.next
    //        l    r    nh
    // ptv => 1 => 2 => 3 => 4 => 5
    // ptv => 1 <= 2  3 => 4 => 5
    // pr
    // ptv => 1 <= 2  3 <= 4    5
    //                pr
    reverse(left, nextHead)

    prev.next = right // ptv => 2
    left.next = nextHead // l => nh
    prev = left // pre => l
    left = nextHead // l => nh
  }
  return ptv.next
};
function getEnd(left: any | null, k: number): any |null {
    //            left  k=0
    // ptv => 1 => 2 => 3 => 4 => 5
  while (left !== null) {
    k--
    if (k === 0) {
      return left
    }
    left = left.next
  }
  return null
}
function reverse(head: any | null, end: any | null) {
  let prev = head
  let curr = head.next
  while(curr!== end) {
    let nextTemp = curr.next
    curr.next = prev
    prev = curr
    curr = nextTemp
  }
  // ptv => 1 <= 2  3 => 4 => 5
}
reverseKGroup(a1, 2)
// @lc code=end

