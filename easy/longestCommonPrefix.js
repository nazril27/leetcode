/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let str = strs[i];

        if (str.length > prefix.length) {
            str = strs[i].slice(0, prefix.length);
        }

        if (prefix !== str) {
            for (let j = 0; j < prefix.length; j++) {
                if (prefix[j] !== str[j]) {
                    prefix = prefix.slice(0, j);
                }
            }
        }

        if (prefix.length === 0) return "";
    }

    return prefix;
};

const strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs));