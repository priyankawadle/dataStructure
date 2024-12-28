// Check if given Parentheses expression is balanced or not
// Input: str = “((()))()()”
// Output: Balanced
// Input: str = “())((())”
// Output: Not Balanced
function isBalanced(str) {
  let stack = [];
  for (let ch of str) {
    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0) {
        return "Not Balanced";
      }
    }
  }
}
// Test cases
const result1 = isBalanced("())((())");
console.log(result1);