/**
 * Created by yanyj on 2018/4/26.
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
 }


 function createListNodesByArray(array) {
     var head  = new ListNode(array[0]);
     var next = head;
     for(var i = 1; i < array.length; i++) {
         next.next = new ListNode(array[i]);
         next = next.next;
     }

     return head;

 }

function logListNode(head) {
    var str = ''
    if(head) {
       str += '[' + (head.val ? head.val: '');
        while(head.next) {
            head = head.next;
            str += ',' + head.val;
        }
        str += ']';
    };

    console.log(head?str:'[]');
}

function logListNodeFormat(head, format) {
    var str = '';
    while (head) {
        str += head.val + format;
        head = head.next;
    }

    console.log(str.slice(0, str.length -(format.length)));
}

function TreeNode(val) {

    return {
        val: val,
        left: null,
        right: null
    }
}

function createTree(array) {

    let root = TreeNode()

    while(array.length) {



    }

}

module.exports = {

    ListNode: ListNode,
    createListNodesByArray: createListNodesByArray,
    logListNode: logListNode,
    logListNodeFormat:logListNodeFormat,

    createTree
};
