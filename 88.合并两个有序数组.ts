/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i1 = m - 1
    let i2 = n - 1
    let count = m + n - 1
    while (i1 >= 0 || i2 >= 0) {
      if (i2 < 0 || i1 >= 0 && nums1[i1] >= nums2[i2]) {
        nums1[count] = nums1[i1]
        i1--
      } else {
        nums1[count] = nums2[i2]
        i2--
      }
      count--
    }
};
// merge([0],0,[1],1)
// @lc code=end

