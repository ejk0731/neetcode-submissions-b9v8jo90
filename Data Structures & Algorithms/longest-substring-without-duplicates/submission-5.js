class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0;
        let set = new Set();
        let res = 0;

        for(let r=0; r<s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l])
                l++;
            }
            set.add(s[r]);
            console.log(l, r, set)
            res = Math.max(res, set.size)

        }
        return res;
    }
}
