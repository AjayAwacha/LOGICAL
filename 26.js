// Check given string is palindrom or not
// palindrom means smae string in forward and reverse
// racecar

function checkPalindrom(str) {
    const comparedStr = str.split('').reverse().join('');
    return comparedStr === str;
}

console.log(checkPalindrom('racecar'));