//
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
//
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
//
//
//
// 示例:
//
//     输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//     说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) return [];
    var keys = {
        1: [],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    var chars = [],
        index = 1,
        subChars = [];
    chars = digits.split('').map(function (p1, p2, p3) {return keys[p1] });
    while(chars.length > 1) {
        index =1;
        for(; index < chars.length; index = index + 2){
            subChars.push(chars[index-1].map(function(b) { return chars[index].map(function(c){ return '' + b+ c}).join()}).join(',').split(','))
        }

        if(chars.length % 2 !== 0) {
            subChars.push(chars.pop())
        }

        chars = subChars;
        subChars = [];

    }

    return chars[0];
};


console.log(letterCombinations('23333333333333'));