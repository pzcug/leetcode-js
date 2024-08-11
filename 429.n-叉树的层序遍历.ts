/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */


function levelOrder(root: _Node | null): number[][] {
  if (!root) return []
	let res = [[root.val]]
  let list: _Node[] = root.children
  while (list.length) {
    let nextLevel: _Node[] = []
    let result: Array<number> = []
    for (let node of list) {
      for (let child of node.children) {
        nextLevel.push(child)
      }
      result.push(node.val)
    }
    res.push(result)
    list = nextLevel
  }
  return res
};
// @lc code=end

