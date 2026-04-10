/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while(fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }  

        let prev = null;
        let curr = slow;
        
        while(curr !== null) {
            let ntx = curr.next;
            curr.next = prev;
            prev = curr;
            curr = ntx;
        }

        let left = head;
        let current = head;
        while(prev !== null && left !== null) {
            left = left.next;
            current.next = prev;
            current = current.next;
            prev = prev.next;
            if(prev === null) break;
            current.next = left;
            current = current.next;
        }
        
    }
}
