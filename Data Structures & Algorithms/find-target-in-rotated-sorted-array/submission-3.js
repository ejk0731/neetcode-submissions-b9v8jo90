class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let obj = {};
        for(let i=0; i<nums.length; i++) {
            obj[nums[i]] = i;
        }
        let res = obj[target] === undefined ? -1 : obj[target];
        return res;
    }
}
