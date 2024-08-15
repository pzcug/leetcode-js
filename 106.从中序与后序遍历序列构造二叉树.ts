/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if(inorder.length === 0) return null
    let root = {val: postorder[postorder.length -1], left: null, right: null}
    let inorderIndex = inorder.indexOf(root.val)
    root.left = buildTree(inorder.slice(0, inorderIndex), postorder.slice(0, inorderIndex))
    root.right = buildTree(inorder.slice(inorderIndex + 1), postorder.slice(inorderIndex, postorder.length - 1))
    return root
};
// @lc code=end

