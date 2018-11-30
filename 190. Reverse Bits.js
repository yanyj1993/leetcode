/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
   return parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);
};

console.log(reverseBits(43261596));

console.log(Number(43261596).toString(2));
console.log('10100101000001111010011100'.length);