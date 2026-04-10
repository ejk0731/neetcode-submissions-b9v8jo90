class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let pre = [];
        let suf = [];
        for(let l=0; l<nums.length; l++) {
            let preProduct = 1;
            let sufProduct = 1;

            for(let k=l-1; k>=0; k--) {
                preProduct = preProduct * nums[k];
            }
            pre.push(preProduct);


            for(let m=l+1; m<nums.length; m++) {
                sufProduct = sufProduct * nums[m];
            }
                console.log(sufProduct);
            suf.push(sufProduct);

        }

        let product;
        for(let i=0; i<nums.length; i++) {
            product = pre[i] * suf[i];
            res.push(product);
        }


            // 0 / 123
            // 0 / 1/ 23
            // 01 / 2 / 3
            // 012 / 3
        return res
    }
}
