/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    let seen = new Set();
    let stack = [];
    let last = {};

    for (let i = 0; i < s.length; i++) last[s[i]] = i;

    for (let i = 0; i < s.length; i++) {

        if (seen.has(s[i])) continue;

        while(stack.length > 0 && stack[stack.length - 1] > s[i] && last[stack[stack.length - 1]] > i) {
            const top = stack.pop(); seen.delete(top);    
        }

        stack.push(s[i]); seen.add(s[i]);
        
    }

    return stack.join('');
};

const s = "cbaacabcaaccaacababa"
console.log(smallestSubsequence(s));

