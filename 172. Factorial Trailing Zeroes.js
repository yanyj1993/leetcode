/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    let count = parseInt(n/5);

    let y = count;


    while (y > 5) {
        count += parseInt(y/ 5);

        y = parseInt(y / 5);
    }


    if(n > 5 && y % 5 === 0) count ++;



    return count;
};


console.log(trailingZeroes(3));