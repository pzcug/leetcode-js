/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    if (!nums.length) return []
    let res = recur(nums[0], nums.slice(1))
    // console.log(res)
    return res
};
function recur(item: number, nums: number[]): number[][] {
  if (!nums.length) return [[item]]
  let subset: number[][] = recur(nums[0], nums.slice(1))
  let result: number[][] = []
  subset.forEach(subnums => {
    for (let i = 0; i <=  subnums.length; i++) {
      result.push([...subnums.slice(0, i), item, ...subnums.slice(i)])
    }
  })
  return result
}
// permute([0,1])
// @lc code=end

