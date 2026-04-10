class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let i = 0;
        let len = string.length;
        let res = true;
        
        while(i < len) {
            if(string[i] !== string[len-1]) return false;
            i++;
            len--;
        }
        
        return res;
    }
}
