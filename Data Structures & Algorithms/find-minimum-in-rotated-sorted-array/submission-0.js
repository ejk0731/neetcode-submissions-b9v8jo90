class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        for(let i=0; i<nums.length; i++) {
            let j=i+1;
            if(nums[i] > nums[j]) return nums[j];
        }
        return nums[0];
    } 
}
