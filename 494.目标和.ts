/*
 * @lc app=leetcode.cn id=494 lang=typescript
 *
 * [494] 目标和
 */

// @lc code=start
function findTargetSumWays(nums: number[], target: number): number {
  let sum = nums.reduce((a, b) => a + b, 0)
  if (sum < Math.abs(target) || (sum + target) % 2!== 0) return 0
  let targetSum = (sum + target) / 2
  let dp = new Array(targetSum + 1).fill(0)
  dp[0] = 1
  for (let num of nums) {
    for (let i = targetSum; i >= num; i--) {
      dp[i] += dp[i - num]
    }
  }
  return dp[targetSum]
};
// @lc code=end

