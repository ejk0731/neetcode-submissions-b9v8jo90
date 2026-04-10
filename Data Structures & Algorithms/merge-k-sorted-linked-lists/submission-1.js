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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        for (let i = 1; i < lists.length; i++) {
            let dummy = new ListNode();
            let current = dummy;
            let leftList = lists[i - 1];
            let rightList = lists[i];

            while (leftList && rightList) {
                if (leftList.val <= rightList.val) {
                    current.next = leftList;
                    leftList = leftList.next;
                } else {
                    current.next = rightList;
                    rightList = rightList.next;
                }
                current = current.next;
            }

            current.next = leftList || rightList;

            // ⭐ 핵심
            lists[i] = dummy.next;
        }

        return lists[lists.length - 1];
    }
}
