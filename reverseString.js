const str = "Hello, Ajay";
let reverseStr = '';
for(let i = str.length -1; i >= 0; i--) {
    reverseStr = reverseStr + str[i];
}
console.log(reverseStr);