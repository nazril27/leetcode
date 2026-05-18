/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length > t.length) return false;

    const obj = [...s].reduce((acc, char) => {
        if (!acc[char]) {
            acc[char] = [char.length, 0];
        } else {
            acc[char][0] += 1;
        }

        return acc;
    }, {});

    for (let i = 0; i < t.length; i++) {
        if (!obj[t[i]]) {
            return false;
        } else {
            obj[t[i]][1] += 1;
        }
    }

    for (char in obj) {
        if (obj[char][0] !== obj[char][1]) {
            return false;
        }
    } 

    return true;
};

const string = 'nagaram';
const anagram = 'anagram';

console.log(isAnagram(string, anagram));


