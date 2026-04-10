class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

      if(nums.length === 0) return 0;
      
      nums.sort((a, b) => a - b);
      let sortedSet = new Set();
      for(const n of nums) {
        sortedSet.add(n)
      }
      console.log(sortedSet)
      // 다음값이 현재값에 1씩 더한 값인가
      let resArr = [];
      let count = 1;
      for(const s of sortedSet) {
        if(sortedSet.has(Number(s)+1)) {
          count++;
        } else {
          resArr.push(count);
          count = 1;
        }
        console.log(resArr)
      } 

      return Math.max(...resArr);
    }
}
