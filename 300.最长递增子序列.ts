/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
// let maxLength = -Infinity
function lengthOfLIS(nums: number[]): number {
  const dp = new Array(nums.length).fill(1)
  let result: number = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    result = Math.max(result, dp[i])
  }
  return result
  // dp[i] = max(dp[j] + 1, dp[i])
    // maxLength = -Infinity
    // recurse(nums, 0, [])
    // return maxLength
};
// function recurse(nums: number[], index: number, cur: number[]) {
//   if (index === nums.length) {
//     maxLength = Math.max(maxLength, cur.length)
//     return
//   }
//   if (cur.length === 0 || nums[index] > cur[cur.length - 1]) {
//     cur.push(nums[index])
//     recurse(nums, index + 1, cur)
//     cur.pop()
//   }
//   recurse(nums, index + 1, cur)
// }
// @lc code=end

