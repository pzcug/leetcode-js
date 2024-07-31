/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let nlength = height.length
    let left = 0
    let right = nlength - 1
    let maxArea = 0
    while(left < right) {
      let area = Math.min(height[left], height[right]) * (right - left)
      maxArea = Math.max(maxArea, area)
      if (height[left] < height[right]) {
        left++
      } else {
        right--
      }
    }
    // console.log(maxArea)
    return maxArea
};
// maxArea([1,8,6,2,5,4,8,3,7])
// @lc code=end

