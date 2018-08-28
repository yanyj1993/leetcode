const lengthOfLastWord = function(s) {
    if(s.length === 0 ) {
        return 0;
    }

    let sArray =  s.split(' ');
    let length = 0;
    for(let i = sArray.length -1; i >= 0; i--  ) {
        if(sArray[i] !== '') {
            return sArray[i].length;
        }
    }
    return length;
};

console.log(lengthOfLastWord(' '))
