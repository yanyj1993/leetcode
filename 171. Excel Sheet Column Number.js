/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {

    let num = 0, l = 0;

    while (l < s.length) {
        num += (s.charCodeAt(s.length - l - 1) - 64 ) * Math.pow(26, l);
        l ++;
    }

    return num;

};


console.log(titleToNumber('AAA'));