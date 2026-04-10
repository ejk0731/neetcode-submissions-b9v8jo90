class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];
        for(const num of nums) {
           let other = target - num;
           let otherLength = nums.filter(num => num === other).length;

           if(num === other && otherLength == 2) {
                for(let i=0; i<nums.length; i++) {
                    if(nums[i] === other) {
                        result.push(i);
                    }
                }
                return result;
           } else if(num === other && otherLength == 1) {
                result = [];
           } else if(nums.indexOf(other) !== -1) {
                let i = nums.indexOf(num);
                let j = nums.indexOf(other);

                if (i > j) {
                    result = [i, j];
                } else {
                    result = [j, i];
                }
                return result;
           }
        }
    }
}
// find the result of target - nums[i]
// check if the result is in the array nums
// find the index of the result
// compare the index with nums[i]
// see if the same 2 element are there 
// and also be careful when the result of target - nums[i] is same as nums[i]