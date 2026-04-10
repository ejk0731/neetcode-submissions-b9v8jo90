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
      
      let now = arr.length - n;

      if(now === 0) {
        arr[now] = arr[now].next;
        return head.next;
      }

      if(arr[now - 1]) {
        arr[now - 1].next = arr[now].next;
      } 
      return head;
    }
}
