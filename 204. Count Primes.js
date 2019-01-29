/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {


    if(n < 2) return 0;
    let count = 0;

    //基于埃拉托斯特尼筛法
    for(let d = 2; d < n; d++){

        if (d <= 3 && d > 1) { count++; continue; }
        if (d % 2 == 0 || d % 3 == 0) { continue; }
        let nonPrime = 0;
        for (let i = 5; i * i <= d; i += 6) {
            if (d % i == 0 || d % (i + 2) == 0) { nonPrime = 1; break; }
        }
        if(!nonPrime) count++;
    }

    return count;

};

console.log(countPrimes(1000));