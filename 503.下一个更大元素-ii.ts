/*
 * @lc app=leetcode.cn id=503 lang=typescript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
function nextGreaterElements(nums: number[]): number[] {
  let index = 0
  let stack: number[] = []
  let result: number[] = new Array(nums.length).fill(-1)
  while (index < nums.length * 2) {
    let id = index % nums.length
    while (stack.length > 0 && nums[id] > nums[stack[stack.length - 1]]) {
      let popIndex = stack.pop() as number
      result[popIndex] = nums[id]
    }
    stack.push(id)
    index++
  }
  return result
};
// @lc code=end

