//pass
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {

    let count = 0;
    let length = nums.length;
    for(let i = 0; i < length - 1; i++ ) {
        if(nums[i] === nums[i+1]) {
            count ++;
        } else {
            nums[i-count +1] = nums[i + 1];
        }
    }

    return nums.length - count;

};

let arr = [1,1,2,3,3,4];
console.log(removeDuplicates(arr));
console.log(arr);