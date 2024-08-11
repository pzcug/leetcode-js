/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    let left = 0
    let right = nums.length - 1
    let first = -1
    let last = -1
    let index = -1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        index = mid
        break
      } else if ( nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    if (index === -1) return [-1, -1]
    first = index
    while (nums[first] === target) {
      first--
    }
    last = index
    while (nums[last] === target) {
      last++
    }
    return [first + 1, last - 1]
};
searchRange([5,7,7,8,8,10], 8)
// @lc code=end

