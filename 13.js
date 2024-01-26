// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string appear somewhere in the second string
// order is important

// Example : 
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
    let counter = 0;
    for(let i = 0; i < str2.length; i++) {
        if (str2[i] === str1[counter]) {
            ++counter;
            if (counter === str1.length) return true;
        }
    }
    return false
}
// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));