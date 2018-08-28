const addBinary = function(a, b) {
    // 导致溢出
    return (parseInt(a) + parseInt(b)).toString(2)
};



const addBinary1 = function(a, b) {
    let bit = 0;
    if(a.length < b.length) {
        a = [b,b=a][0];
    }

    let sumS = '';

    let sum = 0;

    let al = a.length - 1, bl = b.length - 1;
    let bItem = 0;
    while (al >= 0) {
        bItem = bl >=0 ? parseInt(b[bl]) : 0;

        sum = parseInt(a[al]) + bItem + bit;

        if(sum === 2) {
            bit = 1;
            sum = 0;
        } else if (sum === 3) {
            bit = 1;
            sum = 1;
        }else {
            bit = 0;
        }

        sumS  = '' + sum + sumS;

        al --;
        bl --;
    }

    return (bit === 1 ? '1' + sumS : sumS);
};


console.log(addBinary1('1011', '1010'));
