/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    let spli = nums.splice(0, nums.length - k);

    spli.forEach(function (v) {
        nums[k++] = v;
    })
}
var nums = [1,2,3,4,5,6,7];

rotate([1,2,3,4,5,6,7], 3);
console.log(nums);