/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let result: number = 0
  let minp: number = Infinity
  for (let i = 0; i < prices.length; i++) {
    minp = Math.min(minp, prices[i])
    result = Math.max(result, prices[i] - minp)
  }
  return result
};
maxProfit([2,1,2,1,0,1,2])
// @lc code=end

