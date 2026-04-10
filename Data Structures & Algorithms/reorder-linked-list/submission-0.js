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
        let newHead = [];
        while(head !== null) {
            newHead.push(head);
            head = head.next;
        }
        let left = 0;
        let right = newHead.length - 1;
        while(left < right) {
            newHead[left].next = newHead[right];
            left++;
            if(left===right) break;
            newHead[right].next = newHead[left];
            right--;
        }
        newHead[left].next = null;       
    }
}
