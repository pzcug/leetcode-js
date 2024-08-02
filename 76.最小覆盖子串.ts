/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    let sarr = s.split('')
    let tarr = t.split('')
    let targerMap = new Map<string,number>()
    let sourceMap = new Map<string,number>()
    let left = 0
    let right = 0
    let res = ''
    let minLength = Infinity
    tarr.forEach((item) => {
      if (!targerMap.has(item)) {
        targerMap.set(item, 1)
      } else {
        targerMap.set(item, targerMap.get(item) as number + 1)
      }
    })
    while (right < sarr.length) {
      let ls = sarr[right]
      if (sourceMap.has(ls)) {
        sourceMap.set(ls, sourceMap.get(ls) as number + 1)
      } else {
        sourceMap.set(ls, 1)
      }
      right++
      while (isValid(sourceMap, targerMap)) {
        if (right - left < minLength) {
          minLength = right - left
          res = sarr.slice(left, right).join('')
        }
        let ls = sarr[left]
        sourceMap.set(ls, sourceMap.get(ls) as number - 1)
        left++
      }
    }
    // console.log(res)
    return res

};
function isValid(smap: Map<string, number>, tmap: Map<string, number>): boolean {
  let res = true
  tmap.forEach((value, key) => {
    if (!(smap.has(key) && smap.get(key) as number >= value)) {
      res = false
    }
  })
  return res
}
// minWindow("ADOBECODEBANC","ABC")
// @lc code=end

