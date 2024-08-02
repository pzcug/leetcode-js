/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let str:string[] = s.split('')
    let n = str.length
    let res = ''
    debugger
    for (let i = 0; i < n; i++) {
      let s1 = expand(str, i, i)
      let s2 = expand(str, i, i + 1)
      let maxLen = Math.max(s1.length, s2.length)
      if (maxLen > res.length) {
        res = s1.length > s2.length ? s1 : s2
      }
    }
    // console.log(res)
    return res
};
function expand(str: string[], start: number, end: number): string {
  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start--
    end++
  }
  return str.slice(start+1, end).join('')
}
// longestPalindrome("babad")
// @lc code=end

