const romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

function returnNumber(str) {
    const numArr = str.split('');
    let num = 0;
    for(let i= 0; i < str.length; i++) {
        num = num + romanMap[str[i]];
    }
    return num;
}
const result = returnNumber('LVIII');
console.log('result ', result);