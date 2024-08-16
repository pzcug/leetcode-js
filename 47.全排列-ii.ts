/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
let result: number[][] = []
function permuteUnique(nums: number[]): number[][] {
    result = []
    nums.sort((a, b) => a - b)
    let used = new Array(nums.length).fill(false)
    recurse(nums, [], used)
    return result
};
function recurse(nums: number[], res: number[], used: boolean[]) {
  if (res.length === nums.length) {
    result.push([...res])
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1] &&!used[i - 1]) continue
    if (!used[i]) {
      used[i] = true
      res.push(nums[i])
      recurse(nums, res, used)
      res.pop()
      used[i] = false
    }
  }
}
permuteUnique([1,2,3])
// @lc code=end

