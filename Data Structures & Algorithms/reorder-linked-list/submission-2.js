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

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let second = slow.next;
    slow.next = null; // 앞/뒤 리스트 분리

    let prev = null;
    let curr = second;

    while (curr) {
      let ntx = curr.next;
      curr.next = prev;
      prev = curr;
      curr = ntx;
    }

    let first = head;
    let secondHalf = prev;

    while (secondHalf) {
      let tmp1 = first.next;
      let tmp2 = secondHalf.next;

      first.next = secondHalf;
      first = tmp1;
      
      secondHalf.next = first;
      secondHalf = tmp2;
    }
  }
}
