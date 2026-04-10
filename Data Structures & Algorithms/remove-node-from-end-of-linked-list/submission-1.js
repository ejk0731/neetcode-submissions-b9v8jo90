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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
      let arr = [];
      let temp = head;
      while(temp) {
        arr.push(temp);
        temp = temp.next;
      }
      
      let nIdx = arr.length - n;
      if(nIdx === 0) {
        head = head.next;
        return head;
      }
      let prev = nIdx - 1;
      let i = 0;
      let curr = head;
      while(i < prev && curr) {
        curr = curr.next;
        i++;
      }
      curr.next = curr.next.next;

    return head;
    }
}
