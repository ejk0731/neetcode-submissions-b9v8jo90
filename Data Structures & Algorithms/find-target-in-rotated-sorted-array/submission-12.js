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
        let pivot = nums[0];
        while(l < r) {
            if(nums[l] < nums[r]) {
                mid = l;
                pivot = Math.min(pivot, nums[l]);
                break;
                // nums.slice(l, r+1) 안에서 for loop으로 찾는다
                // for(let i=0; i<nums.length; i++) {
                //     console.log(i)
                //     if(nums[i] === target) return i;
                // }
            }
            mid = Math.floor((l+r)/2);
            pivot = Math.min(pivot, nums[mid])
            console.log("first "+ mid, l,r, pivot)
            if(nums[l] <= nums[mid]) {
                l = mid+1;
            } else {
                r = mid-1;
            }
            console.log("next "+ mid, l,r, pivot)
       }
       console.log(nums[mid])
        // pivot point를 찾았다
        // target 이 nums[r] 보다 작으면 for loop mid-nums.length 사이에서 찾고
        // target 이 nums[r] 보다 크면 for loop 0-mid 사이에서 찾는다.
        if(target <= nums[nums.length-1]) {
            console.log("durl", mid)
            for(let i=mid; i<nums.length; i++) {
                console.log("nums[i] "+nums[i])
                if(nums[i] === target) return i;
            }
        } else {
            for(let j=0; j<=mid; j++) {
                 console.log("nums[j] "+nums[j])
                if(nums[j] === target) return j;
            }
        }
        return -1;
    }
}
