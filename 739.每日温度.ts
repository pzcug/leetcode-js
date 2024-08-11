/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
    let index = 0
    let stack: number[] = []
    let result: number[] = new Array(temperatures.length).fill(0)
    while (index < temperatures.length) {
      while (stack.length > 0 && temperatures[index] > temperatures[stack[stack.length - 1]]) {
        let popIndex = stack.pop() as number
        result[popIndex] = index - popIndex
      }
      stack.push(index)
      index++
    }
    return result
};
// @lc code=end

