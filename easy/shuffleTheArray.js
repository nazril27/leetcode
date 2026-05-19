/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    
    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[n + i]);
    }

    return result;
};

const nums = [1,2,3,4,4,3,2,1];
const n = 4;

console.log(shuffle(nums, n));