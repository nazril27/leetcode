/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // const arr = [];

    // for (let i = 0; i < nums.length; i++) {
    //     let countNumber = 0;
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i !== j && nums[i] > nums[j]) {
    //             countNumber++;
    //         }
    //     }
    //     arr.push(countNumber);
    // }

    // return arr;

    const sorted = [...nums].sort((a,b) => a - b);

    const map = {};

    for (let i = 0; i < sorted.length; i++) {
        if (map[sorted[i]] === undefined) {
            map[sorted[i]] = i;
        }
    }

    return nums.map(num => map[num]);
};

console.log(smallerNumbersThanCurrent([7,7,7,7]));