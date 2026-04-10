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
      let slow = head;
      let fast = head;
      let currIdx = 0;

      // slow, fast n만큼 간격 띄우기
      while(currIdx < n ) {
        fast = fast.next;
        currIdx++;
      }

      // fast가 null 만나기 전까지 순회
      // fast.next 가 null 일 경우 slow는 더 가지 않고 멈춤
      // currIdx 는 fast 와 같이 전체를 순회하며 총 길이를 구한다. (head 가 삭제될 경우 때문)
      while(fast) {
        if(fast.next !== null) {
          slow = slow.next;
        }
        fast = fast.next;
        currIdx++;
      }

      console.log(currIdx)
      if(currIdx === n) return head.next;
      slow.next = slow.next.next;

      return head;
    }
}
