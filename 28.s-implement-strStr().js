let strStr = function(haystack, needle) {

    if(needle === '') return 0;

    let hLength = haystack.length;
    let nLength = needle.length;
    let findIndex = -1;
    for( let i = 0; i < hLength; i++) {

        let index = 0;
        while(needle.charAt(index) === haystack.charAt(i + index)) {
            if(index === nLength -1) {
                return i;
            }
            index ++;
        }
    }

    return findIndex;
};


console.log(strStr('12aaa', 'aaaa'))