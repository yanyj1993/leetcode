// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
//
// 例如，给出 n = 3，生成结果为：
//
// [
//     "((()))",
//     "(()())",
//     "(())()",
//     "()(())",
//     "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    var result = [];
    if(n === 0) { result.push('')} else {
        var pre = generateParenthesis(n -1);
        for(var i =0; i < pre.length; i++) {
            var str = pre[i].slice(0).split('');
            for (var j = 0; j < str.length; j++) {
                if(str[j] === '('){
                    str.splice(j + 1, 0, '(', ')');
                    if(result.indexOf(str.join('')) === -1) {
                        result.push(str.join(''));
                        str = pre[i].slice(0).split('');
                    }
                };
            }

            result.push('()' + pre[i]);

        }
    }

    return result.filter(function (s) {
        return s.length === n * 2;
    });
};


console.log(generateParenthesis(4));