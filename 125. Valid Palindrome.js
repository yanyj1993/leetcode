/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.replace(/[^\d^a-z]+/ig,"").toLowerCase();

    let end = s.length - 1;

    for(let i = 0; i < s.length; i ++) {


        if(s.charAt(end) === s.charAt(i)) {
            end --;
            continue;
        } else {

            return false;
        }
    }

    return true;
};

console.log(isPalindrome("0p"));