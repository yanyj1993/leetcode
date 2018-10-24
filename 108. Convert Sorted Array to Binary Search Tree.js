
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {

    if(!nums || !nums.length) {
        return null
    }

    return getTree(nums, 0, nums.length - 1);
};

function getTree(nums, l, r) {
    if(l <= r){
        let mid = Math.floor((l+r)/2);
        let node = new TreeNode(nums[mid]);
        node.left = getTree(nums,l,mid-1);
        node.right = getTree(nums,mid+1,r);
        return node;
    }else{
        return null;
    }

}


console.log(sortedArrayToBST([-1,0,1,2]));
