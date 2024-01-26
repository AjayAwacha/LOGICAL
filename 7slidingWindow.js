// Problem 
// create function which take array and number
// we want to return largest sum of secquence charter of given number
// ex. [1, 2, 5, 2, 8, 1, 5], 2    // 10
// ex. [1, 2, 5, 2, 8, 1, 5], 4    // 17

function largestSumOfNumber(arr, n) {
    let max = 0;
    for(let i = 0; i < arr.length - n + 1; i++) {
        let sum = 0;
       for(let j = 0; j < n; j ++ ) {
        sum = sum + arr[i + j];
       }
       if (sum > max) {
        max = sum;
       }
    }
    return max;
}
// const result = largestSumOfNumber([1, 2, 5, 2, 8, 1, 5], 2);
const result = largestSumOfNumber([1, 2, 5, 2, 8, 1, 5], 4);
console.log('result ', result);