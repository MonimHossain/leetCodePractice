/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function findLen(node) {
    if(!node) {
        return 0;
    }
    return findLen(node.next) + 1;
}

var removeNthFromEnd = function(head, n) {
    const len = findLen(head);
    
    let index = len - n - 1;
    let curr = head;
    
    if(index < 0) {
        return head.next
    }
    
    while(index--) {
        curr = curr.next;
    }
    
    curr.next = curr.next.next;
    
    return head;
};