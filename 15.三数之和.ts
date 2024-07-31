/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    let res: number[][] = []
    let length = nums.length
    nums.sort((a, b) => a - b)
    for (let i = 0; i < length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue
      let target = 0 - nums[i]
      let pair = twoSum(nums.slice(i + 1), target)
      if (pair.length > 0) {
        for (let j = 0; j < pair.length;j++) {
          res.push([nums[i], pair[j][0], pair[j][1]])
        }
      }
    }
    // console.log(res)
    return res
};
// threeSum([-1,0,1,2,-1,-4])
function twoSum(numbers: number[], target: number): number[][] {
  const nlegth = numbers.length
  let left = 0
  let right = nlegth - 1
  let res: number[][] = []
  while(left < right) {
    if (left > 0 && numbers[left] === numbers[left - 1]) {
      left++
      continue
    }
    let sum = numbers[left] + numbers[right]
    if (sum === target) {
      res.push([numbers[left], numbers[right]])
      left++
      continue
    }
    if (sum < target) {
      left++
    } else {
      right--
    }
  }
  // console.log(res)
  return res
}
// @lc code=end
