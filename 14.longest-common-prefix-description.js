// 编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
// 示例 1:
//
// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:
//
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:
//
//     所有输入只包含小写字母 a-z 。
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    var commonPrefix = strs[0], findStrs = strs.slice(1);
    var flag = false;
    while(!flag && commonPrefix) {

        var isMatchCount = 0;

        for(var i = 0; i< findStrs.length; i++) {
            if(findStrs[i].indexOf(commonPrefix) === 0) {
                isMatchCount ++;
            }
        }
        flag = isMatchCount === findStrs.length;
        if(!flag) {
            commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
        }
    }

    return commonPrefix;

};

console.log(longestCommonPrefix(['c', 'acc']));