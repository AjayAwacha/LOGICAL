// Find Factorial using Recursion

function factorial(num) {
    let total = 1;
    for(let i = 1; i <= num; i++) {
        total = total * i;
    }
    return total;
}
console.log(factorial(5));