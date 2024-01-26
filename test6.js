function anotherFunction() {
    console.log('Alpha'); // 1
    setTimeout(() => console.log('Beta'), 0);  // 5
    Promise.resolve().then(() => console.log('Gamma')); // 4
    console.log('Delta');  // 2
}
anotherFunction();
console.log('Epsilon');  // 3