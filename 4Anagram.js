// Problem
// want to check is first string is anagram of secound string
// Anagram is word formed by rearranging work of original string
// simply you have to check is each no charecter present same no in secound string

function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    for(let i = 0; i< str1.length; i++) {
        const indexOfElement = str2.indexOf(str1[i]);
        if (indexOfElement === -1) return false;
        str2 = str2.replace(str1[i], '');
    }
    return true;
}
const arg1 = 'Ajay';
const arg2 = 'yajA';
const result1 = checkAnagram(arg1, arg2);
// console.log('result1 ', result1);


// implement without using any method
function friquencyAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    const friquencyCounter = {};
    for(let i = 0; i < str1.length; i++) {
        friquencyCounter[str1[i]] = (friquencyCounter[str1[i]] || 0) + 1;
    }
    console.log('friquencyCounter ', friquencyCounter);
    for(let i = 0; i < str2.length; i++) {
        if (!friquencyCounter[str2[i]]) return false;
        friquencyCounter[str2[i]] = friquencyCounter[str2[i]] - 1;
    } 
    return true;
}
const result2 = friquencyAnagram('aaz', 'zaa');
console.log('result2', result2);