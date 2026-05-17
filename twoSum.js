/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = new Map();

    hash.set(nums[0], 0);

    for (const [index, num] of nums.entries()) {
        const sisa = target - num;

        if (index !== 0 && hash.has(sisa)) {
            return [hash.get(sisa), index];
        } else {
            hash.set(num, index);
        }
    }
};

const nums = [3, 3];
const target = 6;

console.log(twoSum(nums, target));


