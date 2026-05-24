/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {

    if (digits[i] === 9 && i === 0) {
        digits[i] = 0;
        return [1].concat(digits);
    } else if (digits[i] === 9) {
        digits[i] = 0;
    } else {
        digits[i] += 1;
        return digits;
    }

  }  
};

const digits = [9,9,9];
console.log(plusOne(digits));