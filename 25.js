// Check if a number is a Fibonacci number:

function checkFibonancy(num) {
    if (num === 0 || num === 1) return true;
    let firstNumber = 0;
    let secoundNumber = 1;
    while(secoundNumber <= num) {
        if (secoundNumber === num) return true;
        let temp = firstNumber + secoundNumber;
        firstNumber = secoundNumber;
        secoundNumber = temp;
    }
    return false;
}

console.log(checkFibonancy(55));