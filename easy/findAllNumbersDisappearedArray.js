/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // const map = new Set(nums);
    // const result = [];
    
    // for (let i = 1; i <= nums.length; i++) {
    //     if (!map.has(i)) result.push(i);
    // }

    // return result;

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;

};

const nums = [1,1];

console.log(findDisappearedNumbers(nums));