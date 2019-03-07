/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    var length = nums.length;

    if(!nums || length === 0) return 0;

    if(length < 3) return Math.max.apply(Math, nums);

    var count = 0;

    var index = -1;

    for(var i = 1; i < length; i += 2) {

        if(nums[i] >= nums[i + 1] + nums[i - 1]) {

            count += nums[i];
            index = i;
        } else {
            count += nums[i - 1];
            index = i - 1;
        }

    }

    if(index < length && index !== length - 2) {
        count += nums[length - 1];
    }

    return count;


};


console.log(rob([1,1,1,2]));