/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const duplicate = new Set();

    for (const num of nums) {
        if (duplicate.has(num)) return true;

        duplicate.add(num);
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 2]));