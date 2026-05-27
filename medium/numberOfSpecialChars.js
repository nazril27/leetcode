/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let count = 0;
    const lower = {
        a:null,b:null,c:null,d:null,e:null,f:null,g:null,h:null,i:null,j:null,k:null,l:null,m:null,
        n:null,o:null,p:null,q:null,r:null,s:null,t:null,u:null,v:null,w:null,x:null,y:null,z:null
    };

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== word[i].toUpperCase()) {
            lower[word[i]] = i;
        }
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            if (i > lower[word[i].toLowerCase()] && lower[word[i].toLowerCase()] !== null) {
                count++;
                lower[word[i].toLowerCase()] = null;
            }
            lower[word[i].toLowerCase()] = null;
        }
    }

    return count;
};

const word = "abc";
console.log(numberOfSpecialChars(word));