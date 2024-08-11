/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
    let i = 0
    while (i * i <= x ) {
        i++
    }
    return i - 1
};
// @lc code=end

