/*
 * @lc app=leetcode.cn id=1248 lang=typescript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
function numberOfSubarrays(nums: number[], k: number): number {
  let nlength = nums.length
  let s = [0]
  for(let i=0;i<nlength;i++) {
    s[i+1] = s[i] + nums[i]%2
  }
  let cont:number[] = []
  for (let index = 0; index < s.length; index++) {
    if (cont[s[index]] === undefined) {
      cont[s[index]] = 0
    }
    cont[s[index]]++
  }
  let res=0
  for (let index = 0; index < s.length; index++) {
    if (s[index] - k >= 0) {
      res += cont[s[index] - k] ?? 0
    }
  }
  return res
};
// @lc code=end

