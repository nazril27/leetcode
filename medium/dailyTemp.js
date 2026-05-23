/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const temps = [...temperatures];
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {

        while (stack.length > 0 && 
            temperatures[stack[stack.length - 1]] <= temperatures[i]) {
                stack.pop();
        }

        if (stack.length > 0) {
            temps[i] = stack[stack.length - 1] - i;
        } else {
            temps[i] = 0;
        }

        stack.push(i);
    }

    return temps;
};

const temperatures = [89,62,70,58,47,47,46,76,100,70];
console.log(dailyTemperatures(temperatures));