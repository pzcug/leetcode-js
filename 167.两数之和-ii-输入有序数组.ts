/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    const nlegth = numbers.length
    let left = 0
    let right = nlegth - 1
    let res: number[] = []
    while(left < right) {
      let sum = numbers[left] + numbers[right]
      if (sum === target) {
        res = [left + 1, right + 1]
        break
      }
      if (sum < target) {
        left++
      } else {
        right--
      }
    }
    // console.log(res)
    return res
};
// twoSum([2,7,11,15], 9)
// @lc code=end

