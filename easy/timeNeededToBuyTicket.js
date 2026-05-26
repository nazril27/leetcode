/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;

    while (true) {

        let front = tickets.shift();

        front--; time++; 

        if (front === 0 && k === 0) break;

        if (front === 0) {
            if (k !== 0) {
                k--;
            } else {
                k = tickets.length - 1;
            }
        } else {
            tickets.push(front);
            if (k !== 0) {
                k--;
            } else {
                k = tickets.length - 1;
            }
        }
    }

    return time;
};

const tickets = [2,3,2];
const k = 2;

console.log(timeRequiredToBuy(tickets, k));