const merge = function (nums1, m, nums2, n) {

    let index = 0;
    if (m === 0) {
        n = n -1;
        while( n >= 0) {
            nums1[n] = nums2[n];
            n --;
        }
        return void 0
    }
    ;
    if (n === 0) {
        return void 0
    }
    ;
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] < nums2[index] && i < m) {
            continue;
        } else {
            if (index < n) {
                let k = m;
                while (k > i) {
                    nums1[k] = nums1[k - 1];
                    k--;
                }

                nums1[i] = nums2[index++];
                m++;
            }


        }
    }
};
let nums1 = [1,2,3,0,0,0];
console.log(merge(nums1, 3, [2,5,6], 3));
console.log(nums1);


