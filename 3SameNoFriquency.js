// Problem
// create function which take two array as input
// return true if each array element sqere must present in secound array
// if same no is repeat then same no of time square must present in secound array 

function checkSquare(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        const indexOfElement = arr2.indexOf(arr1[i] * arr1[i]);
        if (indexOfElement === -1) return false;
        arr2.splice(indexOfElement, 1);
    }
    if (arr2.length === 0) return true;
    return false;
}
const result1 = checkSquare([1, 4, 6], [1, 36, 16]);
// console.log(result1);

// without using any Array method means indexOf, splice
const arr1 = [1, 4, 6];
const arr2 = [1, 36, 16];
function friquencyCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    const friquencyCounter1 = {};
    const friquencyCounter2 = {};
    for(let i = 0; i < arr1.length; i ++) {
        friquencyCounter1[arr1[i]] = (friquencyCounter1[arr1[i]] || 0) + 1;
    }
    for(let i = 0; i < arr2.length; i ++) {
        friquencyCounter2[arr2[i]] = (friquencyCounter2[arr2[i]] || 0) + 1;
    }
    if (Object.keys(friquencyCounter1).length !== Object.keys(friquencyCounter2).length) return false;
    for(let [key, value] of Object.entries(friquencyCounter1)) {
        if (!friquencyCounter2.hasOwnProperty(key * key) || friquencyCounter1[key] !== friquencyCounter2[key * key]) {
            return false;
        }
    }
    return true
}
const result2 = friquencyCounter(arr1, arr2);
console.log('result2 ', result2);

