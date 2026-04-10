class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

      if(nums.length === 0) return 0;

      let numSet = new Set();
      for(const n of nums) {
        numSet.add(n)
      }
      console.log(numSet)
      // 다음값이 현재값에 1씩 더한 값인가
      let maxLen = 0;
      for(const s of numSet) {
        if(!numSet.has(s-1)) {
          let currNum = s;
          let count = 1;
          while(numSet.has(currNum+1)) {
            currNum++;
            count++;
          }
          console.log(typeof(s))
          maxLen = Math.max(maxLen, count);
        } 
      } 

      return maxLen;
    }
}
