// Write a recursive function called fib which accepts a number and
// returns the nth number in the Fibonacci sequence

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
    if (num < 2) return 1;
    return fib(n - 1) + fib(n - 2);
}