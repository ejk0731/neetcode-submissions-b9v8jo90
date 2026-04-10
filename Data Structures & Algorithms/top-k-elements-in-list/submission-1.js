class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let hashmap = new Map();
      for (const n of nums) {
        hashmap.set(n, (hashmap.get(n) || 0) + 1);
      }
      console.log(hashmap)
      // compare value and find k most frequent elements
      let max = 0;
      for (const [key, value] of hashmap) {
        max = max > value ? max : value;
      }

      let result = [];
      let remaining = k;
      while(max > 0 && remaining > 0) {
        for(const [key, value] of hashmap) {
          if(max === value) {
            result.push(key); 
            remaining--;
          }
          if(remaining === 0) break;
        } 
        max--;
      }

    return result;
    }
}
