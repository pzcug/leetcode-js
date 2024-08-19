/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
    let t1 = text1.split('')
    let t2 = text2.split('')
    let result: number = 0
    let dp: number[][] = Array.from({ length: t1.length + 1 }, () => Array.from({ length: t2.length + 1 }, () => 0))
    for (let i = 0; i < t1.length; i++) {
      for (let j = 0; j < t2.length; j++) {
        if (t1[i] === t2[j]) {
          dp[i + 1][j + 1] = dp[i][j] + 1
        } else {
          dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
        }
        result = Math.max(result, dp[i + 1][j + 1])
      }
    }
    return result
};
// @lc code=end

