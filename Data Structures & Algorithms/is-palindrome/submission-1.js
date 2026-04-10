class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split(" ").join("");
        let i = 0;
        let len = string.length;
        let res = true;
        
        while(i < len) {
            if(string[i] === string[len-1]) {
                i++;
                len--;
            } else {
                res = false;
                break;
            }
        }
        
        return res;
    }
}
