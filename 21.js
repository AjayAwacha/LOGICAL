// Write a function called productOfArray
// which takes in an array of numbers and
// returns number after multiplying them all

// Example
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Iteration version
// function productOfArray(arr) {
//     let total = 1;
//     for(let i = 0; i < arr.length; i++) {
//         total = total * arr[i];
//     }
//     return total;
// }

// Recursive
function productOfArray(arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.splice(1));
}
console.log(productOfArray([1,2,3,20]));
