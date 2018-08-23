// 报数
let countAndSay = function(n) {

    let say = '1';
    let count = 1;
    if(n === 1) return say;
    for(let i = 1; i < n; i++) {
        let startNum = say.charAt(0);
        let _say = '';
        for(let j =1; j <= say.length; j++) {
            if(startNum === say.charAt(j)) {
                count ++;

            } else {
                _say += count + '' + startNum;
                count = 1;
            }
            startNum = say.charAt(j);
        }
        say = _say;
    }

    return say;

};


console.log(countAndSay(1))
console.log(countAndSay(6))