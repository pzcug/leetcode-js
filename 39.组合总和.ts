/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
let result: number[][] = []
let cur:number[] = []
function combinationSum(candidates: number[], target: number): number[][] {
    result = []
    cur = []
    recurse(candidates, target)
    return result
};
function recurse(candidates: number[], target: number) {
  if (target === 0) {
    result.push(cur.slice())
    return
  }
  if (target < 0) {
    return
  }
  for (let i = 0; i < candidates.length; i++) {
    cur.push(candidates[i])
    recurse(candidates.slice(i), target - candidates[i])
    cur.pop()
  }
}
// @lc code=end

