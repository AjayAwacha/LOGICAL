async function anotherFunction() {
    console.log('Alpha');   //1  
    setTimeout(() => console.log('Beta'), 0);  //5
    await Promise.resolve().then(() => console.log('Gamma')); //3
    console.log('Delta');  //4
}
anotherFunction();
console.log('Epsilon');  //2


