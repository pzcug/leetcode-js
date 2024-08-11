/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
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
};
evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])
// @lc code=end

