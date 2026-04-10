class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) return 0;
        
        let maxSubNum = 1;
    
        for(let i=0; i<s.length -1; i++) {
            let set = new Set();
            let j=i+1;
            set.add(s[i]);

            console.log("i:"+ s[i])
            while(set.has(s[j]) === false) {
                if(j>=s.length) break;
                console.log("j" + s[j])
                set.add(s[j]);
                j++;
                maxSubNum = Math.max(maxSubNum, set.size);
            }
        }
        return maxSubNum;
    }
}
