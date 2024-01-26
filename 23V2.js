// create function which accept one interger number nth
// which return that nth fibonancy number

function fibonancyNumber(num) {
    let firstNumber = 0;
    let secoundNumber = 1;
    if (num === 1) return firstNumber;
    if (num === 2) return secoundNumber;

    for(let i = 2; i <= num; i++) {
        const fibonancyNumber = firstNumber + secoundNumber;
        if (i === num) return fibonancyNumber;
        firstNumber = secoundNumber;
        secoundNumber = fibonancyNumber;
    }
}

console.log(fibonancyNumber(35));