/**
 * Created by yanyj on 2018/4/24.
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var _array = '', result = s.charAt(0);
    for(var i = 0; i< s.length; i++) {
        var j = i,k = i + 1, t;
        _array = s.charAt(i);
        while(s.charAt(i) === s.charAt(k))  {
            _array = s.charAt(i) + _array;
            k = k + 1;
        }
        while(j-1 >= 0 && k < s.length  && s.charAt(j-1) === s.charAt(k)  ) {
            _array = s.charAt(k) + _array + s.charAt(k);
            j = j - 1;
            k = k + 1;
        }
        if(_array.length > result.length) {
            result = _array;
        }


    }

    return result;
};

console.log(longestPalindrome(''));