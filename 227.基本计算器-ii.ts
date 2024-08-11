/*
 * @lc app=leetcode.cn id=227 lang=typescript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
function calculate(s: string): number {
    let stack: any[]= []
    let signStack: string[] = []
    let index = 0
    let numStr = ''
    while (index < s.length) {
      let char = s.charAt(index)
      if (char === ' ') {
        index++
        continue
      }
      if (!isNaN(Number(char))) {
        // 数字
        numStr += char
        index++
        continue
      } else {
        // 符号
        if (numStr) {
          stack.push(numStr)
          numStr = ''
        }
        while (signStack.length && getScore(signStack[signStack.length -1]) >= getScore(char)) {
          let sign = signStack.pop()
          stack.push(sign)
        }
        signStack.push(char)
        index++
        continue
      }
    }
    if (numStr) stack.push(numStr)
    while (signStack.length) {
      let sign = signStack.pop()
      stack.push(sign)
    }
    // console.log(stack)
    return evalRPN(stack)
};
function getScore(s: string): number {
  if (s === '+' || s === '-') return 1
  if (s === '*' || s === '/') return 2
  return 0
}
function evalRPN(tokens: string[]): number {
  let index = 0
  let stack: any[] = []
  while (index < tokens.length) {
    const token = tokens[index]
    if (!isNaN(Number(token))) {
      stack.push(Number(token))
    } else {
      const num2 = stack.pop()
      const num1 = stack.pop()
      switch (token) {
        case '+':
          stack.push(num1 + num2)
          break
        case '-':
          stack.push(num1 - num2)
          break
        case '*':
          stack.push(num1 * num2)
          break
        case '/':
          stack.push(num1 / num2 > 0 ?  Math.floor(num1 / num2) : Math.ceil(num1 / num2))
          break
      }
    }
    index++
  }
  return stack[0]
}
// calculate("3+2*2")
// 3 - 2 * 1
// - *
// 3 2 1
// @lc code=end

