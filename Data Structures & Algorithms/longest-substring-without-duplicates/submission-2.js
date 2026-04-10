class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // sort
        // find the contiguous sequence in original array
        // =======
        // delete duplicate
        // make hashSet
        // currentNum = 0 => increase in each for loop
        // maxSubNum = 0 
        // in each for loop find where duplicate is 
        // and if there is duplicate, compare currentNum with maxSubNum
        // and save bigger one in maxSubNum
        // let set = new Set();
       if (s.length === 0) return 0;
        let currentNum = 1;
        let maxSubNum = 1;
        let start = 0;
        let end = 0;
    
        for(let i=0; i<s.length -1; i++) {
            let set = new Set();
            set.add(s[i]);
            let j=i+1;
            currentNum = 1;

            console.log("i:"+ s[i])
            while(set.has(s[j]) === false) {
                if(j>=s.length) break;
                console.log("j" + s[j])
                 set.add(s[j]);
                    j++;
                    maxSubNum = Math.max(maxSubNum, set.size);
                // console.log(set, currentNum, maxSubNum)
            }
        }

        return maxSubNum;
    }
}
