class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      let hashmap = new Map();
      let result = [];
      for (const n of nums) {
        hashmap.set(n, (hashmap.get(n) || 0) + 1);
      }
      console.log(hashmap)
      
      let bucket = Array(nums.length + 1).fill(0).map(() => []);
      for (const [num, freq] of hashmap) {
        bucket[freq].push(num)
      }
      console.log(bucket.length, nums.length)


      for(let i=nums.length; i>0; i--) {
        if(bucket[i].length === 0) continue;

        for(const num of bucket[i]){
          result.push(num)
          if(result.length === k) return result;
        }
      }

    return result;
    }
}
