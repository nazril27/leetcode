/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    let maxArea = 0;

    const extendedHeights = [...heights, 0];

    for (let i = 0; i < extendedHeights.length; i++) {

        while (stack.length > 0 && extendedHeights[i] < extendedHeights[stack[stack.length - 1]]) {

            let heightIdx = stack.pop();
            let height = extendedHeights[heightIdx];

            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

            let currentArea = height * width;
            maxArea = Math.max(maxArea, currentArea);
        }

        stack.push(i);
    }

    return maxArea;
};

const heights = [1,2,3,4,5];

console.log(largestRectangleArea(heights));