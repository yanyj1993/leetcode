/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    if(n < 10) n *=n;

    if(n === 1) {
        return true;
    }

    var results = [];
    while(true) {

        n = n.toString().split('').reduce(function (a,b) {


            return a + Number(b) ** 2
        }, 0);

        if(n === 1) {
            return true;
        }

        if(results.includes(n)) {
            return false;
        }

        results.push(n);

    }

};

console.log(isHappy(78));