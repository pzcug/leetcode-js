/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let nlength = nums.length
    let left = 0
    let right = nlength - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (nums[mid] === target) {
        // console.log(mid)
        return mid
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    // console.log(-1)
    return -1
};
// search([-1,0,3,5,9,12], 9)
// @lc code=end

