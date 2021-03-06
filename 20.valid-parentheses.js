// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var left = ['(', '{', '['];
    var left2right = {
        ')':'(',
        ']':'[',
        '}':'{',
    }

    var stack = [];
    for(var i = 0; i < s.length; i++) {
        var parenthese = s.charAt(i);
        if(left.indexOf(parenthese) !== -1) {
            stack[stack.length] = parenthese;
        } else {
            if(stack.pop() !== left2right[parenthese]) {
                return false;
            }
        }
    }
    return !stack.length
};

console.log(isValid('{(}'));