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
        let dummy = new ListNode(0);
        let current = dummy;

        // list안의 총 노드의 수가 dummy의 노드 수와 같을때까지
        // 모든  리스트들이 null이 되기 전까지
        while(lists.some(list => list !== null)) {
            let min = Infinity;
            let idx = -1; // index는 0이 될 수 있으므로 -1로 초기설정
           for(let i=0; i<lists.length; i++) {
                if(lists[i] && lists[i].val < min) {
                    min = lists[i].val;
                    idx = i;
                }
            }
           
            current.next = lists[idx];
            current = current.next;
            lists[idx] = lists[idx].next;

        }

        return dummy.next;
    }
}
