/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n) {
        count++;

        n &= n -1;  // 该方法会使最右端的1变成0
    }

    return count;
};

console.log(hammingWeight(128));