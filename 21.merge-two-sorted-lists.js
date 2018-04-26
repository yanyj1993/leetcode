// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
//
// 示例：
//
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
var util = require('./util.js');

function ListNode(val) {
    this.val = val;
    this.next = null;
}


var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    if(!l1 || !l2) return l1 ? l1 : l2;
    var head = new ListNode(l1.val > l2.val ? l2.val : l1.val);
    if(l1.val === head.val) {
        l1 = l1.next;
    } else {
        l2 = l2.next;
    }
    var next = head;
    var subL2, subL1;

    while(l1 && l2) {
        subL1 = l1.next;
        subL2 = l2.next;
        if(l1.val >= l2.val) {
            next.next = new ListNode(l2.val);
            l2 = subL2;
        } else {
            next.next = new ListNode(l1.val);
            l1 = subL1;
        }
        if(l1 !== null && l2 !== null) next = next.next;
    }

    if(!next.next) {
        l1 === null ? next.next = (l2 ? l2:null) : next.next = (l1 ? l1:null);
    } else {
        l1 === null ? next.next.next = (l2 ? l2:null) : next.next.next = (l1 ? l1:null);
    }


    return head;
};


util.logListNodeFormat(mergeTwoLists(util.createListNodesByArray([-8,-7,-4,0,7,8,9]),util.createListNodesByArray([-3])), ' -> ');