/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let nlength = nums.length
    let result:any = nums[0]
    let s:number[]= [0]
    let mins = 0
    for(let i=0;i<nlength;i++) {
        s[i+1] = s[i] + nums[i]
        mins = Math.min(mins,s[i])
        result = Math.max(result,s[i+1] - mins)
    }
    return result
}
// @lc code=end
