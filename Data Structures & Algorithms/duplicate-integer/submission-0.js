class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i=0; i<nums.length; i++) {
            for(let j=i+1; j<nums.length; j++ ) {
                    console.log(nums[i], nums[j])
                if(nums[i] == nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    // check num[1] with num[2], num[3], num[4] 
    // i should increase untill length-1
    // check num[2] with num[3], num[4]

    // ...
    // if there is any same value, return true and stop
    // if there is no same value, reture false and stop

}
