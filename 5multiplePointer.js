// Problem Statment
// find first pair in sorted array which sum is zero
// ex. [-3, -2, -1, 0, 1, 2, 3]

// My Version
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        const firstEle = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            const secoundEle = arr[j];
            if (firstEle + secoundEle === 0) return {
                firstEle : firstEle,
                secoundEle: secoundEle
            }
        }
    }
}
const result1 = sumZero([-3, -2, -1, 0, 1, 2, 3]);
// console.log('result1 ', result1);

// with Multiple Pointer Solution
// remember array is sorted we can take advantage of this
function multiplePointerVersion(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    while(leftPointer < rightPointer) {
        const sum = arr[leftPointer] + arr[rightPointer];
        if (sum === 0) return [arr[leftPointer], arr[rightPointer]];
        if (sum > 0) {
            --rightPointer;
        } else {
            ++leftPointer
        }
    }
    return undefined;
}
const result2 = multiplePointerVersion([-3, -2, -1, 0, 1, 3, 5]);
console.log('result2 ', result2);