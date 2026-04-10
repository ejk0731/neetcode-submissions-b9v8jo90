class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = {};
        let result = [];

        for(let i=0; i<nums.length; i++) {
            let findnum = target - nums[i];
            if(hashmap[findnum] !== undefined) {
                result = [i, hashmap[findnum]]
                return result;
            }
            hashmap[nums[i]] = i; 
            console.log(hashmap)
        }
        return [];
    }
}
// find the result of target - nums[i]
// check if the result is in the array nums
// find the index of the result
// compare the index with nums[i]
// see if the same 2 element are there 
// and also be careful when the result of target - nums[i] is same as nums[i]