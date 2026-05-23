/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    // let count = 0;
    // let n = nums.length;

    // for (let i = 0; i < n; i++) {
    //     if (nums[i] > nums[(i + 1) % n]) {
    //         count++;
    //     }
    // }

    // return count <= 1;
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[(i + 1) % n]);
    }

};

const nums = [2,2,3,4,5,2];

console.log(check(nums));