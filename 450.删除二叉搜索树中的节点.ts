/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null
  if (root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  } else {
    if (root.left === null && root.right === null) return null
    if (root.left) {
      const maxNode = findMax(root.left, key)
      root.val = maxNode.val
      root.left = deleteNode(root.left, maxNode.val)
    } else if (root.right) {
      const minNode = findMin(root.right, key)
      root.val = minNode.val
      root.right = deleteNode(root.right, minNode.val)
    }
  }
  return root
}
function findMax(root: TreeNode | null, key: number): TreeNode | null {
  while (root && root.right !== null) {
    root = root.right
  }
  return root
}
function findMin(root: TreeNode | null, key: number): TreeNode | null {
  while (root && root.left !== null) {
    root = root.left
  }
  return root
}
// @lc code=end

