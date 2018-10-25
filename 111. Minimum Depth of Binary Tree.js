/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {

    if(!root) return 0;


    return  getMinHeight(root);
};

function getMinHeight(node) {

    if(!node) {
        return 0;
    }

    if(!node.left && !node.right) {
        return 1
    }

    if(!node.left) return getMinHeight(node.right) + 1;
    if(!node.right) return getMinHeight(node.left) + 1;

    return Math.min(getMinHeight(node.left), getMinHeight(node.right)) + 1;

}
