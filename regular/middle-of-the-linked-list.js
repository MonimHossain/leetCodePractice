/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let mid = 0;
    let counter = head;
    
    while(counter.next){
        counter = counter.next;
        mid++;
    }
    mid = Math.ceil(mid/2);
    
    while(mid){
        head = head.next;
        mid--;
    }
    return head;
};