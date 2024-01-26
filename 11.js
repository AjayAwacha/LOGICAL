// Implement a function called, areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among the arguments
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
function areThereDuplicates(...arg) {
    const set = new Set();
    for(let i = 0; i < arg.length; i++) {
        if (set.has(arg[i])) {
            return true;
        } else {
            set.add(arg[i])
        }
    }
    return false
}
// const result = areThereDuplicates(1, 2, 3);
const result = areThereDuplicates('a', 'b', 'c', 'a');
console.log(result);