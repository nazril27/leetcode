/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const res = new Array(n);
    const stack = [];
    let prevTime = 0;

    for (const log of logs) {
        let [id, type, timestamp] = log.split(':');
        id = parseInt(id);
        timestamp = parseInt(timestamp);

        if (type === 'start') {
            if (stack.length !== 0) {
                if (res[stack[stack.length - 1]] === undefined) {
                    res[stack[stack.length - 1]] = 0;
                }
                res[stack[stack.length - 1]] += timestamp - prevTime;
            }
            stack.push(id);
            prevTime = timestamp;
        } else {
            if (res[stack[stack.length - 1]] === undefined) {
                res[stack[stack.length - 1]] = 0;
            }
            res[stack.pop()] += timestamp - prevTime + 1;
            prevTime = timestamp + 1;
        }
    }

    return res;
};

const n = 2;
const logs = ["0:start:0","1:start:2","1:end:5","0:end:6"];

console.log(exclusiveTime(n, logs));
