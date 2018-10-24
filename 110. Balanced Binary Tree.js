/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    if(!root) return true;

    let left = getHeight(root.left);
    let right = getHeight(root.right);

    if(Math.abs(right - left) > 1) {
        return false
    }

    return isBalanced(root.left) && isBalanced(root.right)
};

function getHeight(node) {
    var left, right, height;

    if(!node) {
        return 0;
    }

    left = getHeight(node.left);
    right = getHeight(node.right);

    height = 1 + (left > right ? left : right);

    return height;

}
