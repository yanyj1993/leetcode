/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let value = 0;

    let end = 0;
    let max = 0;

    for(let i = 0; i < prices.length; i ++) {
        max = prices[i];
        for(let j = i + 1; j < prices.length; j ++ ) {

            if(max < prices[j]) {
                max = prices[j];
                end = j;
            } else {
                break;
            }

        }

        if( max > prices[i]) {
            value += max - prices[i];
            i = end;
        }



    }

    return value;
};


console.log(maxProfit([4,2,1,6,1]));