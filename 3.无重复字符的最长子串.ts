/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let nLength = s.length
    let str = s.split('')
    if (nLength === 0) return 0
    let left = 0
    let right = 0
    let maxLen = 0
    let map = new Map<string, number>()
    // debugger
    while(right < nLength) {
      let rightS = str[right]
      if (map.has(rightS)) {
        let value = map.get(str[right]) as number
        map.set(rightS, value + 1)
      }  else {
        map.set(rightS, 1)
      }
      right++
      while (map.get(rightS) as number > 1) {
        let leftS = str[left]
        let value = map.get(leftS) as number
        map.set(str[left], value - 1)
        left++
      }
      maxLen = Math.max(maxLen, right - left)
    }
    // console.log(maxLen)
    return maxLen
};
// lengthOfLongestSubstring("abcabcbb")
// @lc code=end

