// write function which return factorial of number

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(--num);
}
console.log(factorial(5));