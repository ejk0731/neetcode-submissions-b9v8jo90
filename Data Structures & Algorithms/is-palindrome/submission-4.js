class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let i = 0;
        let len = s.length - 1;
        
        while(i < len) {
            if(s[i] !== s[len]) return false;
            i++;
            len--;
        }
        
        return true;
    }
}
