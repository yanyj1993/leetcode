/*
* 解题思路：
* */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let maxProfit = 0;

    let length = prices.length;

    let max = -1;

    for(let i = 0; i < length; i ++) {
        max = prices[i];
        for(let j = i + 1; j < length; j ++) {
           if(prices[j] > max) {
               max = prices[j];
           }
        }

        maxProfit = maxProfit > (max - prices[i]) ? maxProfit : (max - prices[i]);
    }


    return maxProfit > 0 ? maxProfit : 0;


};

console.log(maxProfit([3,2,1]));
