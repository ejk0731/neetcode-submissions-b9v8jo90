class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
         if (t.length > s.length) return "";
        let l=0;
        let res= "";
        let minLength=Infinity;
        let map = new Map();
        for(const n of t) {
            map.set(n, (map.get(n) || 0) + 1);
        }
        let need = map.size;

        for(let r=0; r<s.length; r++) {
            
            if(map.has(s[r])) {
                map.set(s[r], map.get(s[r]) - 1);
                if(map.get(s[r]) === 0) {
                    need--;
                }
            }
            console.log(need)

            while(need === 0) {
                if(r-l+1 < minLength) {
                    minLength = r - l + 1;
                    res = s.slice(l, r+1);
                }
                if(map.has(s[l])) {
                    map.set(s[l], map.get(s[l]) + 1);
                    if(map.get(s[l]) > 0) {
                        need++;
                    }
                }
                l++;
            }
        }
        return res;
    }
}
