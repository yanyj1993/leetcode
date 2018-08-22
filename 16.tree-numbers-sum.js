// add by yanyj 20180727 start
// 三数之和

/*给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
    // sort

    nums.sort((a, b) => a > b);

    let sum = nums[0] + nums[1] + nums[2];

    let diff = Math.abs(target - sum);

    for(let i =0, len = nums.length; i<len; i++) {



    }



};


// add by yanyj 20180727 end