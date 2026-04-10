class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let count = {};
        if (s.length == t.length) {
            for(const ch of s) {
                count[ch] = (count[ch] || 0) + 1;
            }

            for(const ch of t) {
                if(!count[ch]) {
                    return false;
                } else {
                    count[ch]--;
                }
            }
            return true;

        } else {
            return false;
        }
    }
}
// check if it has same charactor and same amount
// make a map and count each letter 
// and see if t has the same letter count