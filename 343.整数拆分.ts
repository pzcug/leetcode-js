/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
    let dp = new Array(n).fill(0)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            dp[i] = Math.max(dp[i] || 0, Math.max(j * dp[i - j], j * (i - j)))
        }
    }
    return dp[n]
};
// @lc code=end

