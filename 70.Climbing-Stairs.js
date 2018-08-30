var climbStairs = function(n) {
    let one = n;
    let two = parseInt(n / 2);
    let count = 0;
    while (two >= 0) {
        one = n;
        while (one >= 0) {
            if(two * 2 + one === n) {

                if(two !== 0 && one !== 0) {
                    let result = 1;
                    let num = two + one;
                    while(num){
                        result *= num;
                        num--;
                    }
                    count += result;


                } else {
                    count ++;
                }
            }
            one --;
        }
        two --;
    }

    return count;
};


// 斐波那契数列

const climbStairs1  = function(n) {

    if(n === 1) return 1;
    if(n === 2) return 2;

    let stairs = [];

    stairs[0] = 1;
    stairs[1] = 2;

    for(let i = 2; i < n; i ++) {
        stairs[i] = stairs[i -1] + stairs[i - 2];
    }

    return stairs[n - 1];
};


console.log(climbStairs1(5));
