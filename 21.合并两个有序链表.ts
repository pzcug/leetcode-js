/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: any | null, list2: any | null): any | null {
    if ( list1 === null || list2 === null ) return list1 || list2
    let p:any = { val: null, next: null}
    let head = p
    while( list1 !== null || list2 !== null){
      if( list2 === null || (list1 !== null && list1.val <= list2.val ) ){
        p.next = list1
        list1 = list1.next
      }else{
        p.next = list2
        list2 = list2.next
      }
      p = p.next
    }
    return head.next
};
// @lc code=end

