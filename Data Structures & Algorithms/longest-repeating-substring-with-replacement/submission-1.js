class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;

        for(let l=0; l<s.length; l++) {
            let hashMap = new Map();
            let maxNum = 0;
            for(let r=l; r<s.length; r++) {
                hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1)
                
                maxNum = Math.max(maxNum, hashMap.get(s[r]));
                
                if((r - l + 1) - maxNum <= k) {
                    res = Math.max(res, r - l + 1);
                }
            }
        }
        return res;


    }
}
