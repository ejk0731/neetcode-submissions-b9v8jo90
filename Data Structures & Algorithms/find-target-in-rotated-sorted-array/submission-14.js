class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length-1;
        let mid = 0;
        while(l < r) {
            if(nums[l] < nums[r]) {
                mid = l;
                break;
            }
            mid = Math.floor((l+r)/2);
            if(nums[l] <= nums[mid]) {
                l = mid+1;
            } else {
                r = mid-1;
            }
       }
        // pivot point => mid 를 찾았다
        // target 이 nums[r] 보다 작으면 for loop mid-nums.length 사이에서 찾고
        // target 이 nums[r] 보다 크면 for loop 0-mid 사이에서 찾는다.
        if(target <= nums[nums.length-1]) {
            for(let i=mid; i<nums.length; i++) {
                if(nums[i] === target) return i;
            }
        } else {
            // mid 가 0일 경우를 대비하여 j<=mid
            for(let j=0; j<=mid; j++) {
                if(nums[j] === target) return j;
            }
        }
        return -1;
    }
}
