/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (!root) return
    let nodes = []
    dfs(root, nodes)
    for (let i = 1; i < nodes.length; i++) {
      nodes[i - 1].left = null
      nodes[i - 1].right = nodes[i]
    }
};
function dfs(root: TreeNode | null, record: any[]) {
  if (!root) return
  record.push(root)
  dfs(root.left, record)
  dfs(root.right, record)
}
// @lc code=end

