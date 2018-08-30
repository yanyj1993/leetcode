/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head;
    let next = head.next;
    let pre = head;
    while (next) {
        if(pre.val === next.val) {
            pre.next = next.next;

        } else {
            pre = next;

        }

        next = next.next;
    }


    return head;

};
