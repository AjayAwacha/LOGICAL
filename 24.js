// Generate the first n Fibonacci numbers
// fibonancy series is series in which next number is generate by adding previous
// two number  0, 1, 1, 2, 3, 5, 8, 13

function generateFobonancyNumber(num) {
    const result = [0, 1];
    for(let i = 2; i < num; i++) {
        const nextNum = result[i - 1] + result[i - 2];
        result.push(nextNum);
    }
    return result;
}
const list = generateFobonancyNumber(10);
console.log(list);
