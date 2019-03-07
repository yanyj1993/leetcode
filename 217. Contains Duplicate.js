/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
    return new Set(nums).size === nums.length;
};