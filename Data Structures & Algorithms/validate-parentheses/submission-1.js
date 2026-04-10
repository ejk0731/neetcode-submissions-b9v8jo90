class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !==0) return false;
        let brackets = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        let stack = [];
        for(const n of s) {
            if(n in brackets) {
                if(stack.length === 0) return false;

                let pair = stack.pop();
                if(pair !== brackets[n]) return false;
            } else {
                stack.push(n);
            }
        }
        return stack.length === 0;
        // let j = s.length-1;
        // let i = 0;
        
        // while() {
        //     let matchingB = brakets[stack[i]];
        //     console.log("matchingB"+ matchingB, stack[j], i ,j)
        //     if(stack[i+1] == matchingB) {

        //     }
        //     if(stack[j] == matchingB) {
        //      j--;

        //     } 
            
            
        // }
        return true;

    }
}
