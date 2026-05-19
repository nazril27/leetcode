/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const arr = new Array(nums.length);
    let double = null;
    let missing = 0;

    for (let i = 0; i < nums.length; i++) {
        if (arr[nums[i] - 1]) {
            double = nums[i];
            continue;
        }
        arr[nums[i] - 1] = nums[i];
    }

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            missing = arr[i - 1] ? arr[i - 1] + 1 : arr[i + 1] - 1;
        } else if (arr.length === 1) {
            missing = 2;
        }
    }

    return [double, missing];
};

const nums = [1,5,3,2,2,7,6,4,8,9];

console.log(findErrorNums(nums));