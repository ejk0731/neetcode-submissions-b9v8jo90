class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let water = 0;
        for(let i=0; i<heights.length-1; i++) {
            let j=i+1;

            while(j<heights.length) {
                water = water > (j-i) * Math.min(heights[i], heights[j]) ?
                    water : (j-i) * Math.min(heights[i], heights[j]);
                j++;
            }
        }

        return water;
    }
}
