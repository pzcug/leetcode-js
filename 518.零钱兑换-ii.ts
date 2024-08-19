/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
    if (!coins.length) return 0
    let dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < coins.length; i++) {
      for (let j = coins[i]; j <= amount; j++) {
        dp[j] += dp[j - coins[i]]
      }
    }
    // for (let j = 0; j <= amount; j++){
    //   for (let i = 0; i < coins.length; i++)  {
    //     if (j - coins[i] >= 0) {
    //       console.log('当前容量：', j, '当前硬币:', coins[i])
    //       console.log('放入后增加方法数', dp[j - coins[i]], '原来方法数', dp[j])
    //       dp[j] += dp[j - coins[i]]
    //     }
    //   }
    // }
    return dp[amount]
};
change(5,[1, 2, 5])
// @lc code=end

