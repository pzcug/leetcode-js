/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
    let result = []
    if (!root) return result
    let queue = [root]
    while (queue.length) {
      let level = []
      let nextLevel = []
      for (let node of queue) {
        level.push(node.val)
        if (node.left) nextLevel.push(node.left)
        if (node.right) nextLevel.push(node.right)
      }
      result.push(level)
      queue = nextLevel
    }
    return result
};
// @lc code=end

