/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const str = s.split('')
    let left = 0
    let right = str.length - 1
    while(left < right) {
      if (!/[a-z0-9]/.test(str[left].toLowerCase())) {
        left++
        continue
      }
      if (!/[a-z0-9]/.test(str[right].toLowerCase())) {
        right--
        continue
      }
      if (str[left].toLowerCase()!== str[right].toLowerCase()) {
        return false
      }
      left++
      right--
    }
    return true
};
// isPalindrome("A man, a plan, a canal: Panama")
// @lc code=end

