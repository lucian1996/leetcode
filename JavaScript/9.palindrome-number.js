/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  const str = x.toString()
  const midIndex = Math.floor(str.length / 2)
  const leftStr = str.substring(0, midIndex)
  const rightStr = str.substring(midIndex + (str.length % 2))
  function reverseString(str) {
    return str.split("").reverse().join("")
  }
  return reverseString(leftStr) === rightStr
}
isPalindrome(12321)
// @lc code=end
