/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) { return [1] };
    if(rowIndex === 1) { return [1, 1] };


    let array = [];


    for(let i = 0; i <= rowIndex; i ++) {
        array.push(c(rowIndex, i));
    }


    return array;
};

function c(n, m) {

    return jc(n) / (jc(m ) * jc(n - m));

}

function jc(n) {

    if(n === 0) return 1;


    return n* jc(n - 1)
}

console.log(getRow(1));
