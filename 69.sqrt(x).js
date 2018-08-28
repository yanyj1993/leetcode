const mySqrt = function(x) {
    let xStr = '' + x;
    let length = (xStr).length;


    let first =  0;

    if( length <= 2) {
        first = x;
        length = 0;
    } else if(length % 2 === 0) {
        first = parseInt(x / (Math.pow(10 , length -2 )));
        x = x % (Math.pow(10 , length -2));
        length -= 2;
    } else {
        first =  parseInt(x/ (Math.pow(10 , length -1 )));
        x = x % (Math.pow(10 , length - 1));
        length -= 1;
    }

    let y = 0;
    while(y*y <= first) {
        y++;
    }

    let sqrtNum = y - 1;

    let c = sqrtNum * sqrtNum;
    while (length > 0) {

        first = (first - c) * 100 +  parseInt(x / (Math.pow(10 , length -2 ) ));


        y = 0;

        while ((sqrtNum*2*10 + y) * y <= first) {
            y ++
        }
        c = (sqrtNum*2*10 + y -1) * (y -1);


        sqrtNum = sqrtNum * 10 + (y -1);

        x = x % (Math.pow(10 , length -2 ));
        length = length -2;

    }


    return sqrtNum;

};


console.log(mySqrt(16));
console.log(parseInt(Math.sqrt(43046721)));
