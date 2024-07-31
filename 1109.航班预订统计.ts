/*
 * @lc app=leetcode.cn id=1109 lang=typescript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
function corpFlightBookings(bookings: number[][], n: number): number[] {
    const diff:number[] = new Array(n).fill(0)
    const nlength = bookings.length
    for (let i = 0; i < nlength; i++) {
      const first = bookings[i][0] - 1
      const last = bookings[i][1]
      const num = bookings[i][2]
      diff[first] += num
      last < n && (diff[last] -= num)
    }
    const res: number[] = new Array(n).fill(0)
    res[0] = diff[0]
    for (let i = 1; i < n; i++) {
      res[i] = res[i-1] + diff[i]
    }
    // console.log(res)
    return res
};
// corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5)
// @lc code=end

