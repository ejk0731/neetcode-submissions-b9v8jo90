class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let water = 0;
        let i = 0;
        let j = heights.length-1;
        while(i < j) {
            water = Math.max(water, (j-i) * Math.min(heights[i], heights[j]));
            if(heights[i] > heights[j])  j--;
            else  i++;
        }

        return water;
    }
}
