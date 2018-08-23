let searchInsert = function(nums, target) {
    // 二分法
    let length = nums.length;
    let left = 0, right = length;
    let midle = Math.floor((left + right) / 2);

    while(left < right) {
        if(nums[midle] === target) {
            return midle;
        } else if(nums[midle] > target) {
            right = midle;
        } else {
            left = midle + 1;
        }
        midle = Math.floor((left + right) / 2)

    }

    return midle === length ? midle  : midle;
};


console.log(searchInsert([1,2,3,5,6], 7))