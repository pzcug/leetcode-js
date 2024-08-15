/*
 * @lc app=leetcode.cn id=416 lang=typescript
 *
 * [416] 分割等和子集
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
    let sum = nums.reduce((acc, cur) => acc + cur, 0)
    if (sum % 2!== 0) return false
    let target = sum / 2
    let dp = new Array(target + 1).fill(0)
    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = Math.max(dp[i], dp[i - num] + num)
        }
    }
    return dp[target] === target
};
// @lc code=end

