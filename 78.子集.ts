/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    if (!nums.length) return [[]];
    const res = getSubsets(nums[0], nums.slice(1))
    // console.log(res)
    return res
};
function getSubsets(item: number, nums: number[]): number[][] {
  if (nums.length === 0) {
    return [[], [item]]
  } else {
    const subsets = getSubsets(nums[0], nums.slice(1));
    const newSubsets = subsets.map((subset) => [...subset, item]);
    return [...subsets,...newSubsets];
  }
}
subsets([1,2,3])
// @lc code=end

