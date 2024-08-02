/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let cont = 0
    for (let i = 0; i < nums.length; i++) {
      if ( i === 0 || nums[i] !== nums[i - 1] ) {
        nums[cont] = nums[i]
        cont += 1
      }
    }
    return cont
};
// @lc code=end

