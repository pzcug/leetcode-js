/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
function sortArray(nums: number[]): number[] {
    // mergeSort(nums, 0, nums.length -1)
    quickSort(nums, 0, nums.length -1)
    console.log(nums)
    return nums
};
// 归并排序
function mergeSort(nums:number[], left: number, right: number): void {
  if (left >= right) return
  const mid = Math.floor((left + right) / 2)
  mergeSort(nums, left, mid)
  mergeSort(nums, mid + 1, right);
  merge(nums, left, right, mid)
}

function merge(nums: number[], left: number, right: number, mid: number): void {
  let leftArr = nums.slice(left, mid + 1)
  let rightArr = nums.slice(mid + 1, right + 1)
  let count = right
  let i = leftArr.length - 1
  let j = rightArr.length - 1
  while ( i >= 0 || j >= 0) {
    if ( j < 0 || ( i >= 0 && leftArr[i] > rightArr[j])) {
      nums[count] = leftArr[i]
      i--
    } else {
      nums[count] = rightArr[j]
      j--
    }
    count--
  }
}
// 快排
function quickSort(nums: number[], l: number, r: number) {
  if (l >= r) return;
  // let pivotIndex = partition(nums, l, r)
  // quickSort(nums, l, pivotIndex - 1)
  // quickSort(nums, pivotIndex + 1, r)
  let boundaruIndex = partition2(nums, l, r)
  quickSort(nums, l, boundaruIndex )
  quickSort(nums, boundaruIndex + 1, r)
}
function partition(nums: number[], l: number, r: number) {
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
function partition2(nums: number[], l: number, r: number) {
  let pivot = nums[Math.floor((l + r)/2)]
  let i = l
  let j = r
  while ( i <= j) {
    while (nums[i] < pivot) {
      i++
    }
    while (nums[j] > pivot) {
      j--
    }
    if (i === j) break
    if (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      i++
      j--
    }
  }
  return j
}
sortArray([-4,0,7,4,9,-5,-1,0,-7,-1])
// @lc code=end

