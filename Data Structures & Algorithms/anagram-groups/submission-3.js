class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let group = {};

        for(const s of strs) {
            let key = s.split('').sort().join('');
            if(!group[key]) {
                group[key] = [];
            }
            group[key].push(s);
        }
       
        return Object.values(group);
    }
}