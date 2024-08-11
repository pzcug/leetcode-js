/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
    let index = 0
    let stack: number[] = []
    let res = 0
    while (index < height.length) {
      while (stack.length && height[index] > height[stack[stack.length - 1]]) {
        const topInex = stack.pop()!
        if (stack.length) {
          const distance = index - stack[stack.length - 1] - 1
          const minHeight = Math.min(height[index], height[stack[stack.length - 1]]) - height[topInex]
          res += distance * minHeight
        }
      }
      stack.push(index)
      index++
    }
    return res
};
// @lc code=end

