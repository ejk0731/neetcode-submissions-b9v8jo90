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
        if (!lists || lists.length === 0) return null;

        while(lists.length > 1) {
            let mergedLists = [];
            for (let i = 0; i < lists.length; i += 2) {
                let leftList = lists[i];
                let rightList = lists[i+1];
                mergedLists.push(this.mergeList(leftList, rightList));
            }
            lists = mergedLists;
        }
        return lists[0];
    }

    mergeList(leftList, rightList) {
        let dummy = new ListNode();
        let current = dummy;
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

        return dummy.next;
    }
}
