// Given two positive integers, find out if the two
// numbers have the same frequency of digits.
// ameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function ameFrequency(num1, num2) {
    const str1 = num1 + '';
    const str2 = num2 + '';
    if (str1.length !== str2.length) return false;
    const counterFriquency1 = {};
    for(let i = 0; i < str1.length; i++) {
        counterFriquency1[str1[i]] = (counterFriquency1[str1[i]] || 0) + 1;
    }
    for(let i = 0; i < str2.length; i++) {
        if (!counterFriquency1[str2[i]]) return false;
        --counterFriquency1[str2[i]];
    }
    return true
}
const result = ameFrequency(182, 281);
console.log('result ', result);