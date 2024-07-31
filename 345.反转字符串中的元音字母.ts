/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
function reverseVowels(s: string): string {
    const chars = ['A', 'E', 'I', 'O', 'U']
    const arr = s.split('')
    let left = 0
    let right = arr.length - 1
    while (left < right) {
      if (!chars.includes(arr[left].toUpperCase())) {
        left++
        continue
      }
      if (!chars.includes(arr[right].toUpperCase())) {
        right--
        continue
      }
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
    }
    // console.log(arr.join(''))
    return arr.join('')
};
// reverseVowels("leetcode")
// @lc code=end

