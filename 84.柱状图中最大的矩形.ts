/*
 * @lc app=leetcode.cn id=84 lang=typescript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
function largestRectangleArea(heights: number[]): number {
    if (heights.length === 1) return heights[0]
    let index = 0
    let maxArea = 0
    heights.unshift(0)
    heights.push(0)
    let stack: number[] = []
    while (index < heights.length) {
      while (stack.length && heights[index] < heights[stack[stack.length -1]]) {
        let height = heights[stack.pop()!]
        // 0 2 1 5 0
        // 0 2
        let width = index - (stack.length? stack[stack.length - 1] + 1 : 0)
        maxArea = Math.max(maxArea, height * width)
      }
      stack.push(index)
      index++
    }
    return maxArea
};
// largestRectangleArea([2,1,5,6,2,3])
// @lc code=end

