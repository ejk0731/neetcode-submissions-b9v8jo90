class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

      if(nums.length === 0) return 0;

      let numSet = new Set(nums);
      let maxLen = 0;
      console.log(numSet);

      for(const s of numSet) {
        // 연결 시작점인 숫자 찾기
        if(!numSet.has(s-1)) {
          let currNum = s;
          let count = 1;
          // 해당 숫자에 1씩 더하며 길이 구하기
          while(numSet.has(currNum+1)) {
            currNum++;
            count++;
          }
          maxLen = Math.max(maxLen, count);
        } 
      } 

      return maxLen;
    }
}
