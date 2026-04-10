class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxSubNum = 0;
    
        for(let i=0; i<s.length; i++) {
            let set = new Set();
            for(let j=i; j<s.length; j++) {
                if(set.has(s[j])) break;
                set.add(s[j]);
            }
            maxSubNum = Math.max(maxSubNum, set.size);
        }
        return maxSubNum;
    }
}
