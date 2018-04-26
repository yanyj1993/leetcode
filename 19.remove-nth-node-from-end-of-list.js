// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
//
// 示例：
//
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
//
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
//
// 给定的 n 保证是有效的。
//
// 进阶：
//
// 你能尝试使用一趟扫描实现吗？

 function ListNode(val) {
     this.val = val;
     this.next = null;
     return {
         val: val,
         next: null
     };
 }
var removeNthFromEnd = function(head, n) {
    if(n === 1 && !head.next) {
        return null;
    }
    var arr = [head];
    var next = head.next;
    var _head = arr[0];
    while(next) {
        arr.push(next);
        next = next.next;
    }


    for(var i = arr.length - 1; i >= 0 ; i --) {
        if((arr.length - i) === n) {
            if(arr[i - 1]) {
                arr[i - 1].next = arr[i + 1] || null;
            } else {
                _head = arr[i + 1] || null;

                return _head;
            }
        }

    }

    return _head;

};

var node = ListNode(1);
    node.next = ListNode(2);
var result = removeNthFromEnd(node, 2);

console.log(result);