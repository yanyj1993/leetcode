/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    var aNext = headA, bNext = headB;

    while (aNext && bNext) {
        if (aNext === bNext) return aNext;
        aNext = aNext.next;
        bNext = bNext.next;

        if (aNext === bNext) return aNext;
        if (!aNext) {
            aNext = headB
        }
        if (!bNext) {
            bNext = headA
        }
    }

    return aNext;

};