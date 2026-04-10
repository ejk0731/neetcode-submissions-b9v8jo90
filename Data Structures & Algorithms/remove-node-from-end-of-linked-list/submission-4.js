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
      let lengChk = head;
      let leng = 0;
      while(lengChk) {
        lengChk = lengChk.next;
        leng++;
      }

      let nth = leng - n;
      let curr = 0;
      let dummy = head;

      // 삭제 대상이 head
      if(nth === 0) {
        head = head.next;
        return head;
      }

      while(dummy) {
        if(curr === nth - 1) {
          dummy.next = dummy.next.next;
          return head;
        }
        dummy = dummy.next;
        curr++;
        console.log(dummy)
      }
      
      return head;
    }
}
