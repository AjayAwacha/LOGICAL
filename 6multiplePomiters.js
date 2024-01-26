// Problem Statment
// write a function which accept array of sorted element we want to find unique elements in the array
// ex. [1, 1, 1, 1, 2] // 2
// ex. [-3, -2, 2, 3, 3, 3] // 4

// My Solution
function counteUniqueV1(arr) {
    const set = new Set(arr);
    return set.size;
}
const result1 = counteUniqueV1([1, 1, 1, 1, 2]);
// console.log('result1 ', result1);


function counteUniqueV2(arr) {
    let uniqueCount = 1;
    for(let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            ++uniqueCount;
        }
    }
    return uniqueCount;
}
const result2 = counteUniqueV2([1, 1, 1, 1, 2]);
console.log('result2 ', result2);