/**
 * Created by yanyj on 2018/4/24.
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    //case: p 为 * 或者 p中没有*但字符串与正则不一致, 或*在第一行
    if(p === '*' || (p.indexOf('*') === -1 && s.length != p.length) || p.indexOf('*') === 0) {
        return false;
    }
    if(s === '' && p === '') {
        return true
    }
    if((s === '' && p.length >0) || (p === '' && s.length >0)) {
        return false;
    }

    var _s = s;
    var index = 0;
    for(var i = 0 ; i < p.length; i++) {
        var reChar = p.charAt(i);
        if(reChar === '.') {

        } else if(reChar === '*') {

        } else if(p.charAt(i + 1) === '*'){

        } else {
            if(_s.charAt(index) === reChar) {
                _s = _s.slice(1);
            }
        }
    }

    return _s.length === 0;

};

console.log(isMatch('aab', 'aab'));