class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numMap = new Map();
        let result = [];

        for(let i=0; i<nums.length; i++) {
            let findnum = target - nums[i];
            if(numMap.has(findnum)) {
                result = [i, numMap.get(findnum)];
                return result;
            }
            numMap.set(nums[i], i);
            console.log(numMap)
        }
        return [];
    }
}