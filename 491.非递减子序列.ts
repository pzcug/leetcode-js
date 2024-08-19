/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 非递减子序列
   */

// @lc code=start
let result: number[][] = []
function findSubsequences(nums: number[]): number[][] {
    result = []
    recurse(nums, 0, [])
    return result
};
function recurse(nums: number[], index: number, cur: number[]) {
  if (cur.length > 1) result.push(cur.slice())
  let usedSet = new Set()
  for (let i = index; i < nums.length; i++) {
    if (usedSet.has(nums[i])) continue
    if (cur.length === 0 || nums[i] >= cur[cur.length - 1]) {
      cur.push(nums[i])
      usedSet.add(nums[i])
      recurse(nums, i + 1, cur)
      cur.pop()
    }
  }
}
// @lc code=end

