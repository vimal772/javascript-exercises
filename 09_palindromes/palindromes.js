const palindromes = function (str) {
    const re = /[^a-z0-9]/g;
    const processedStr = str.toLowerCase().replace(re,'');
    return processedStr.split('').reverse().join('') == processedStr;

};

// Do not edit below this line
module.exports = palindromes;
