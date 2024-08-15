/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
let res: number[][] = []
let nums: number[] = new Array(9).fill(0).map((val, index) => index + 1)
function combinationSum3(k: number, n: number): number[][] {
    res = []
    for (let i = 0; i < 9; i++) {
      let curres = [nums[i]]
      help(k - 1, n - nums[i], i + 1, curres)
    }
    return res
};
function help(k: number, n: number,startindex: number, curres: number[]): void {
  if (k === 0) return
  if (k === 1) {
    for (let i = startindex; i < 9 ; i++) {
      if ( nums[i] === n) {
        curres.push(nums[i])
        res.push(curres)
        return
      }
    }
  }
  for (let i = startindex; i < 9 ; i++) {
    help(k - 1, n - nums[i], i + 1, curres.concat(nums[i]))
  }
}
combinationSum3(3, 7)
// @lc code=end

