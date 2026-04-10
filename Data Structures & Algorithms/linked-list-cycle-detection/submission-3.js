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
     * @return {boolean}
     */
    hasCycle(head) {
        let hashset = new Set();
        if(!head) return false;
 
        while(head.next !== null) {
            if(hashset.has(head.val)) {
                return true;
            }
            hashset.add(head.val)
            head = head.next;
            console.log(head.val)
        }

        if(head.next === null) {
            return false;
        }
        
    }
}
