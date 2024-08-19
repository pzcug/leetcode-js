/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
    let result: number = 0;
    let left = 0
    let right = 0
    while (left <= right && right < nums.length) {
      if (right + 1 < nums.length && nums[right + 1] > nums[right]) {
        right++
      } else {
        right++
        left = right
      }
      result = Math.max(result, right - left + 1)
    }
    return result
};
// @lc code=end
