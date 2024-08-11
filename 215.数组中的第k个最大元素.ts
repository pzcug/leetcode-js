/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  let result = quickSort(nums, 0, nums.length - 1, nums.length - k)
  // console.log(result)
  return result
};
function quickSort(nums: number[], left: number, right: number, target: number): number {
  let boundaruIndex = sortArray(nums, left, right)
  if (boundaruIndex === target) {
    return nums[target]
  } else if (boundaruIndex < target) {
    return quickSort(nums, boundaruIndex + 1, right, target)
  }
  return quickSort(nums, left, boundaruIndex - 1, target)
}
function sortArray(nums: number[], l: number, r: number): number {
  let pivot = nums[r]
  let i = l
  let j = l
  while ( j <= r) {
    if (nums[j] < pivot) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
    }
    j++
  }
  [nums[i], nums[r]] = [nums[r], nums[i]]
  return i
}
findKthLargest([5,2,4,1,3,6,0],4)

// @lc code=end

