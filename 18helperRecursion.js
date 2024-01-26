// we can also use helper method with recursion
// create function with take array as argiment and return 
// array containing only even number

function oddOnly(arr) {
    const result = [];

    function helper(originalArray) {
        if (originalArray.length === 0) return;
        if (originalArray[0] % 2 !== 0) {
            result.push(originalArray[0]);
        }
        helper(originalArray.splice(1));
    }
    helper(arr);

    return result;
}
console.log(oddOnly([1, 2, 3, 4, 5, 6, 7, 8, 9]));