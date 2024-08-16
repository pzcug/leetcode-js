/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
let res: number[][] = []
function combinationSum2(candidates: number[], target: number): number[][] {
  res = []
  candidates.sort((a, b) => a - b)
  recurse(candidates, target, [])
  return res
};
function recurse(candidates: number[], target: number, cur: number[]) {
  if (target < 0) return
  if (target === 0) {
    res.push([...cur])
    return
  }
  for (let i = 0; i < candidates.length && target >= candidates[i]; i++) {
    if (i > 0 && candidates[i] === candidates[i - 1]) continue
    cur.push(candidates[i])
    recurse(candidates.slice(i + 1), target - candidates[i], cur)
    cur.pop()
  }
}
// @lc code=end

