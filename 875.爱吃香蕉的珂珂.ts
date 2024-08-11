/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
    return eate(piles, h)
};
function eate(piles: number[], h: number): number {
  let left = 1
  let right = Math.max(...piles)
  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2)
    if (piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0) <= h) {
      if (piles.reduce((sum, pile) => sum + Math.ceil(pile / (mid - 1)), 0) > h) {
        return mid
      }
      right = mid -1
    } else  {
      left = mid + 1
    }
  }
  return left
}
// minEatingSpeed([1,1,1,999999999], 10)
// @lc code=end

