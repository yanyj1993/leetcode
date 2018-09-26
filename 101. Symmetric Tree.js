const isSymmetric = function(root) {

    let isSamle = isSameTree = function(p, q) {

        if(p == null && q == null)
            return true;
        else{
            if(p == null || q == null)
                return false;
            return (p.val == q.val
                && isSameTree(p.left,q.right)
                && isSameTree(p.right,q.left));
        }





    };


    return !!root ? isSamle(root.left, root.right) : true;


};


console.log(typeof global)
