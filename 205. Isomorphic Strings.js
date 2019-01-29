/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;

    let keys1 = {}, keys2 = {};
    let sr = '', tr = '';
    for(let i = 0; i < s.length; i ++) {
       if(!keys1[s.charAt(i)]) {
           keys1[s.charAt(i)] = i + 1;
       }

       if(!keys2[t.charAt(i)]) {
            keys2[t.charAt(i)] = i + 1;
       }

       sr += keys1[s.charAt(i)];
       tr += keys2[t.charAt(i)];
    }

    return sr === tr;
};

console.log(isIsomorphic('01', '11'));