class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        for(let l=0; l<s.length; l++) {
            for(let r=l; r<s.length; r++) {
                let str = s.slice(l, r+1)
                let hashMap = new Map();
                let maxNum = 0;
                for(const s of str) {
                    hashMap.set(s, (hashMap.get(s) || 0) + 1)
                }
                for(const [s,v] of hashMap) {
                    maxNum = Math.max(maxNum, v);
                }
                if(str.length - maxNum <= k) {
                    res = Math.max(res, str.length);
                }
            }
        }
        return res;


    }
}
