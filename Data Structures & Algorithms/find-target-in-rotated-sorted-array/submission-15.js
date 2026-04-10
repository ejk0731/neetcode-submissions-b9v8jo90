class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length-1;
        while(l <= r) {
            let m = Math.floor((l+r)/2);
            console.log(l,m,r)
            if(nums[m] === target) return m;
            if(nums[l] <= nums[m]){ // 왼쪽정렬
            console.log("left")
                if(nums[l] <= target && target < nums[m]) { // 타겟이 왼쪽에 있을때
                    r = m-1; // 왼쪽보기
                } else { // 타겟이 오른쪽에 있을때
                    l = m+1; // 오른쪽보기
                }
            } 
            else { // 오른쪽 정렬  
            console.log("right")       
                if(nums[m] < target && target <= nums[r]) { // 타겟이 오른쪽에 있을때
                    l = m+1; // 오른쪽보기
                } else { // 타겟이 왼쪽에 있을때
                    r = m-1; // 왼쪽보기
                }
            }
        }
        return -1;
    }
}
               
