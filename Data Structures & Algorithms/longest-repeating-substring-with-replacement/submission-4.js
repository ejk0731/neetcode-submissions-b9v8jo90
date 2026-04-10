class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let maxNum = 0;
        let l = 0;
        let hashMap = new Map();
        for(let r=0; r<s.length; r++) {
            hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1)
            maxNum = Math.max(maxNum, hashMap.get(s[r]));
            
            while((r - l + 1) - maxNum > k) {
                hashMap.set(s[l], hashMap.get(s[l]) - 1)
                l++;
            }

            res = Math.max(res, r - l + 1);
        }
        return res;


    }
}
