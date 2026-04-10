class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodeArr = [];
        for(const s of strs) {
            encodeArr.push(s.length + "#" + s)
        }
        // console.log(encodeArr.join(""))
        return encodeArr.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) { 
        let resArray = [];
        let i = 0;
        // i start point
        // j # point, where # 

        while(i < str.length) {
            let j = i;
            while(str[j] !== "#") {
                j++;
            }
          
            let leng = Number(str.slice(i,j));
            let start = j + 1;
            let end = start + leng;
            let word = str.slice(start, end);

            resArray.push(word);
            // change i, if not i will always be 0 
            // and do the same loop again and again!
            console.log(i, j, leng, word, str[i])
            i = end;
        }
        
        return resArray
    }
}
