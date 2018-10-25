/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(!numRows) return [];

    let array = [[1]];
    let _array = [];
    for(let i = 1; i < numRows; i ++) {
        _array = [];
        for (let j = 0; j < i + 1; j ++) {
            _array.push((array[i-1][j] || 0) + (array[i-1][j - 1] || 0))
        }

        array.push(_array);
    }

    return array;
};


console.log(generate(5));
