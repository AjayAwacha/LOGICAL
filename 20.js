// write function factorial.
// accept integer number and return factorial of that number
// 0 factorial is 1

// Example
//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// Iteration Version
// function factorial(num) {
//     let total = 1;
//     for(let i = 1; i <= num; i++) {
//         total = total * i;
//     }
//     return total;
// }

// recursive version
function factorial(num) {
    if (num === 1 || num === 0) return 1;
    return num * factorial(--num);
}
console.log(factorial(0));