/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    if(nums.length ===1) return  nums[0]

    let half = nums.length / 2;

    nums.sort(function (a, b) {
        return a - b;
    });

    let count = 1;

    for(let i = 1; i < nums.length ; i ++) {

        if(nums[i] === nums[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if((count) >half) {
            return nums[i - 1];
        }

    }

};


console.log(majorityElement([1,22,22]));