/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
function findLength(nums1: number[], nums2: number[]): number {
    let dp = Array.from({length: nums1.length + 1}, () => new Array(nums2.length + 1).fill(0))
    let result: number = 0
    for (let i = 0; i <= nums1.length; i++) {
      for (let j = 0; j <= nums2.length; j++) {
        if ( i >= 1 && j >= 1 && nums1[i - 1] === nums2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1
          result = Math.max(result, dp[i][j])
        }
      }
    }
    // console.log(dp.toString())
    return result
};
findLength([1,2,3,2,1], [3,2,1,4,7])
// @lc code=end

