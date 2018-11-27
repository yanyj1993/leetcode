/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    const  length = numbers.length;

    for (let i = 0; i< length; i++) {

        for (let j = i + 1; j< length; j++) {

            if(numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }


        }

    }

};

//  使用双向指针遍历

const twoSum1 = function(numbers, target){

   let start = 0, end = numbers.length - 1;

   let sum ;

   while(true) {

       sum = numbers[start] + numbers[end];

       if(sum === target) {
           return[start + 1, end + 1];
       }


      sum < target ? start ++ : end --;

   }



};


console.log(twoSum([1,2,3,4], 7))