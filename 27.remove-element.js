/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {

    let count = 0;
    let length = nums.length;
    for(let i = 0; i < length; i++ ) {
        if(nums[i] === val) {
            count ++;
        } else {
            nums[i-count] = nums[i];
        }
    }

    return nums.length - count;
};

let arr = [3,2,2,3];

console.log(removeElement(arr, 3));
console.log(arr);