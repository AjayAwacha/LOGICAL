const arr1 = [1, 4, 6, 6];
const arr2 = [1, 36, 16, 36];

function checkArray(arr1, arr2) {

    if (arr1.length !== arr2.length) return false;

    const frequencyCounter = {};
    for (let i = 0; i < arr2.length; i++) {
        frequencyCounter[arr2[i]] = (frequencyCounter[arr2[i]] || 0) + 1;
    }

    for(let i = 0; i < arr1.length; i++) {
        if (!frequencyCounter[arr1[i] * arr1[i]]) return false;
        frequencyCounter[arr1[i] * arr1[i]] = (frequencyCounter[arr1[i] * arr1[i]] || 0) - 1;
    }
    return true;
}
console.log(checkArray(arr1, arr2));

