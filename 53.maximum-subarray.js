/**
 * @param {number[]} nums
 * @return {number}
 */

// 扫描法
const maxSubArray = function(nums) {

    let current = nums[0],
        sum = current;

    for(let i = 1; i < nums.length; i ++) {

        current = current < 0 ? nums[i] : current + nums[i];

        if(current > sum) sum = current;
    }

    return sum;

};


console.log(maxSubArray([2,1, -1]))
