/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    let count = 0;
    let y = 0;
    while (n > 0) {

        if(n % 5 === 0) {
            count ++;
            y = parseInt(n / 5);
            while (y % 5 === 0) {
                y = parseInt(y / 5);
                count ++;
            }

        }
        n --;
    }

    return count;
};


console.log(trailingZeroes(50));