const plusOne = function(digits) {
    let length = digits.length;

    for(let i = length - 1; i > -1; i--) {
        if(digits[i] + 1 === 10) {
            digits[i] = 0;
            if(i === 0) {
                return [].concat([1], digits)
            }
        }  else {
            digits[i] ++;
            return digits;
        }
    }
};


console.log(plusOne([999]));
