/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const n = prices.length;
    const ans = [...prices];
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {

        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            ans[i] = prices[i] - prices[stack[stack.length - 1]];
        }

        stack.push(i);
    }

    return ans;

};

const prices = [8,4,6,2,3];

console.log(finalPrices(prices));