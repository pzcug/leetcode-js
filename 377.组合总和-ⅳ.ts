/*
 * @lc app=leetcode.cn id=377 lang=typescript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
function combinationSum4(nums: number[], target: number): number {
    let result: number
    let dp =  new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= target; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] <= i) {
          dp[i] += dp[i - nums[j]]
        }
      }
    }
    return dp[target]
};
// @lc code=end

