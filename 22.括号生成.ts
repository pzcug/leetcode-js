/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let res = []
    if (n === 0) return res
    generate(res, "", 0, 0, n)
    return res

};
function generate(res: string[], str: string, left: number, right: number, n: number): void {
  if (left === n && right === n) {
    res.push(str)
    return
  }
  if (left < n) {
    generate(res, str + '(', left + 1, right, n)
  }
  if (right < left) {
    generate(res, str + ')', left, right + 1, n)
  }
}
// @lc code=end

