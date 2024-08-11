/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

function isValidBST(root: TreeNode | null): boolean {
  return recurse(root, Infinity, -Infinity)
};
function recurse(root: TreeNode | null, max: number, min: number): boolean {
  if (!root) return true
  if (root.val <= min || root.val >= max) return false
  return recurse(root.left, root.val, min) && recurse(root.right, max, root.val)
}
// @lc code=end

