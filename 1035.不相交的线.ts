/*
 * @lc app=leetcode.cn id=1035 lang=typescript
 *
 * [1035] 不相交的线
 */

// @lc code=start
function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    let result: number = 0
    let dp = Array.from({length: nums1.length + 1}, () => Array.from({length: nums2.length + 1}, () => 0))
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
          dp[i + 1][j + 1] = dp[i][j] + 1
        } else {
          dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
        }
        result = Math.max(result, dp[i + 1][j + 1])
      }
    }
    return result
};
// maxUncrossedLines([1,4,2], [1,2,4])
// @lc code=end

