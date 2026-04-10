class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = 1;
        let price = 0;

        while(sell < prices.length) {
            console.log(buy, sell, price)
            if(prices[buy] < prices[sell]) {
                price = Math.max(price, (prices[sell] - prices[buy]));                  
            } else {
                buy=sell; // 더 싼 날로 buy 이동
            }
            sell++;
        }
        return price;
    }
}
