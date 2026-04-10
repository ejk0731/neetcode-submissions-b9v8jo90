class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
     isPalindrome(s) {
        let string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split(" ").join("");

        let len = string.length;
        let start = string.slice(0, len/2);;
        let end;

        if(len%2) {
            end = string.slice((len/2 + 1), len+1);
        } else {
            end = string.slice((len/2), len+1);
        }

        let startLen = start.length;
        let res = true;
        console.log(start, end, startLen)

        for(let i=0; i<startLen; i++) {
            if(start[i] !== end[startLen - 1 - i]) {
              res = false;
              break;
            }
        }
        return res;
    }
}
