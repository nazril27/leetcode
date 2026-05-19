/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = [];
    
    let index = 0;

    for (let curr = 1; curr <= n; curr++) {
        if (target[index] !== curr) {
            result.push('Push', 'Pop');
        } else {
            result.push('Push');
            index++;
        }
        if (index === target.length) break;
    }

    return result;    
};

const target = [1,3];
const n = 3;

console.log(buildArray(target, n));