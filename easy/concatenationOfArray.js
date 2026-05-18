/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const result = [];

    let index = 0;
    while(result.length < nums.length * 2) {
        if (index === nums.length) index = 0;
        result.push(nums[index]);
        index++;
    }  

    return result;
};

const nums = [1,3,2,1];
console.log(getConcatenation(nums));
