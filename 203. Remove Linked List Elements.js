/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {



    while(head && head.val === val) {
        head = head.next
    }

    if(head === null) {
        return head;
    }
    let next = head;

    let nextNext = next.next;

    while(nextNext !== null) {
        if(nextNext.val === val) {
            next.next = nextNext.next;
            nextNext.next = null;
            nextNext = next.next;
        } else {
            next = next.next;
            nextNext = next.next;
        }
    }

    return head;

};