/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        return mid
      }
      if (nums[left] <= nums[mid]) {
        // 左侧升序右侧循环
        if (nums[left] <= target && target < nums[mid]) {
          // 在左侧数组
          right = mid - 1
        } else {
          left = mid + 1
        }
      } else {
        // 右侧升序左侧循环
        if (nums[mid] < target && target <= nums[right]) {
          left = mid + 1
        } else {
          right = mid - 1
        }
      }
    }
    return -1
};
// @lc code=end

