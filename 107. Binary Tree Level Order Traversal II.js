const levelOrderBottom = function(root) {

    if(root === null) {
        return [];
    }

    let roots = [root];
    let nextRoots = [];
    let leafs = [];
    let all = [];



    while(roots.length !== 0) {

        let leaf = roots.shift();
        if(leaf) {
            leafs.push(leaf.val);
        }

        if(leaf.left) {
            nextRoots.push(leafs.left);
        }

        if(leafs.right) {
            nextRoots.push(leaf.right);
        }

        if(roots.length === 0) {
            all.push(leafs);
            roots = nextRoots;

            nextRoots = [];
            leafs = [];
        }

    }

    return all.reverse();


};
