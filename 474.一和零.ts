/*
 * @lc app=leetcode.cn id=474 lang=typescript
 *
 * [474] 一和零
 */

// @lc code=start
function findMaxForm(strs: string[], m: number, n: number): number {
  let dp: number[][] = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0))
  for (let i = 0; i < strs.length; i++) {
    const [zeros, ones] = strs[i].split('').reduce<[number, number]>(
      ([countZeros, countOnes], char) => {
        if (char === '0') {
          return [countZeros + 1, countOnes]
        } else {
          return [countZeros, countOnes + 1]
        }
      },
      [0, 0]
    )
    for (let j = m; j >= zeros; j--) {
      for (let k = n; k >= ones; k--) {
        dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1)
      }
    }
   }
   return dp[m][n]
};
findMaxForm(["10", "0001", "111001", "1", "0"], 5,3)
// @lc code=end

