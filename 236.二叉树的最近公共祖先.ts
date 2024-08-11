/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
let result: any
// let root = {val: 3,left:null,right:null} as any
// let a5 = {val: 5,left:null,right:null} as any
// let a1 = {val: 1,left:null,right:null} as any
// let a2 = {val: 2,left:null,right:null} as any
// let a6 = {val: 6,left:null,right:null} as any
// let a8 = {val: 8,left:null,right:null} as any
// let a7 = {val: 7,left:null,right:null} as any
// let a4 = {val: 4,left:null,right:null} as any
// let a0 = {val: 0,left:null,right:null} as any
// root.left = a5
// root.right = a1
// a5.left = a6
// a5.right = a2
// a2.left = a7
// a2.right = a4
// a1.left = a0
// a1.right = a8
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if (root === null) return null
  result = null
  hasLeftorRight(root, p, q)
  return result
};
function hasLeftorRight(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) : boolean[] {
  if (root === null) return [false, false]
  let [haspl, hasql] = hasLeftorRight(root.left, p, q)
  let [haspr, hasqr] = hasLeftorRight(root.right, p, q)
  let hasp = haspl || haspr || root.val === p.val
  let hasq = hasql || hasqr || root.val === q.val
  if (hasp && hasq && !result) {
    result = root
  }
  return [hasp,hasq]
}
// lowestCommonAncestor(root, a5, a1)
// @lc code=end

