/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    const letterMap = new Map<string, string[]>()
    letterMap.set('2', ['a', 'b', 'c'])
    letterMap.set('3', ['d', 'e', 'f'])
    letterMap.set('4', ['g', 'h', 'i'])
    letterMap.set('5', ['j', 'k', 'l'])
    letterMap.set('6', ['m', 'n', 'o'])
    letterMap.set('7', ['p', 'q', 'r','s'])
    letterMap.set('8', ['t', 'u', 'v'])
    letterMap.set('9', ['w', 'x', 'y', 'z'])
    let letters: string[] = digits.split('')
    return recurse(letters, letterMap)
};
function recurse(letters: string[], letterMap: Map<string, string[]>): string[] {
  if (!letters.length) {
    return []
  }
  const digit = letters[0]
  const lettersForDigit = letterMap.get(digit)!
  let res: string[] = recurse(letters.slice(1), letterMap)
  if (!res.length) {
    res = [...lettersForDigit]
    return res
  }
  let newRes: string[] = []
  for (let letter of lettersForDigit!) {
    for (let resLetter of res) {
      newRes.push(letter + resLetter)
    }
  }
  return newRes
}
letterCombinations('23')
// @lc code=end

