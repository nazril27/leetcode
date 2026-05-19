/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let longest = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (longest < count) longest = count;
            count = 0;
        } else if (i === nums.length - 1) {
            count++;
            if (longest < count) longest = count;
        } else {
            count++;
        }
    }

    return longest;
};

const nums = [1,1,0,1,1,1];

console.log(findMaxConsecutiveOnes(nums));