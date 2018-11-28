/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {


    let title = '';
    while(n > 0) {


        title = String.fromCharCode((n - 1) % 26 + 65) + title;

        n = parseInt((n - 1) / 26);
    }

    return title;
};


console.log(convertToTitle(703));

// 701    26 * 26 + 25
//            z + y
// 702   26 * 26 + 26
//           z + z
// 703   26 * 26 * 1 + 26 * 1 + 1
//           A + A A