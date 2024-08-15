/*
 * @lc app=leetcode.cn id=1049 lang=typescript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
function lastStoneWeightII(stones: number[]): number {
    let sum = stones.reduce((acc, cur) => acc + cur, 0)
    let target = Math.floor(sum / 2)
    let dp = new Array(target + 1).fill(0)
    for(let stone of stones) {
      for(let j = target; j >= stone; j--) {
        dp[j] = Math.max(dp[j], dp[j - stone] + stone)
      }
    }
    return Math.abs(sum -  2*dp[target])
};
// lastStoneWeightII([2,7,4,1,8,1])
// @lc code=end

