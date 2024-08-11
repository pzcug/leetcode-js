/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    let sArr = s.split('')
    let index = 0
    let stack: string[] = []
    const squs = ['(', '[', '{']
    while (index < sArr.length) {
      let char = sArr[index]
      if (squs.includes(char)) {
        stack.push(char)
      } else {
        if (stack.length === 0) {
          return false
        }
        let topChar = stack.pop()
        if (char === ')' && topChar!== '(' ||
            char === ']' && topChar!== '[' ||
            char === '}' && topChar!== '{') {
          return false
        }
      }
      index++
    }
    return !stack.length
}
// isValid('[')
// @lc code=end

