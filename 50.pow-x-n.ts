/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    return  getpow(x, n)
};
function getpow(x: number, n: number): number {
  if (n < 0) return 1 / getpow(x, -n);
  if (n === 0) return 1;
  if (n === 1) return x;
  const half = getpow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return half * half;
  } else {
    return half * half * x;
  }
}
// @lc code=end

