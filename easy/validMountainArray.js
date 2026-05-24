/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length <= 2 || arr[0] >= arr[1]) return false;

    let down = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            down = true;
        }

        if (!down) {
            if (arr[i] >= arr[i + 1]) return false;
        } else {
            if (arr[i] <= arr[i + 1]) return false;
        }
    }

    return down;
};

const arr = [0,1,2,4,2,1];
console.log(validMountainArray(arr));