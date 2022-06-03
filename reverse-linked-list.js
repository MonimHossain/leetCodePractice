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
 var reverseList = function(head) {
    let node = head;
    let previous = null;

    while(node) {
        let save = node.next;
        node.next = previous;
        previous = node;
        node = save;
  }
  return previous;
};