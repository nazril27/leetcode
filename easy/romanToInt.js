/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dictionary = new Map();

    dictionary.set('I', 1);
    dictionary.set('V', 5);
    dictionary.set('X', 10);
    dictionary.set('L', 50);
    dictionary.set('C', 100);
    dictionary.set('D', 500);
    dictionary.set('M', 1000);

    let result = 0;
    let current = null;

    for (let i = 0; i < s.length; i++) {
        if (dictionary.get(s[i]) < dictionary.get(s[i + 1]) && i !== s.length - 1) {
            current = dictionary.get(s[i]) * -1;
        } else {
            current = dictionary.get(s[i]);
        }
        result += current;
    }

    return result;
};

console.log(romanToInt('MMMCMXCIX'));