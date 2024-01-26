// Sorting

// Sort string array
const strArray = ['fa', 'zj', 'ac', 'az', 'ah', 'kl', 'bb'];
console.log(strArray.sort());
// sort method sort element by string

// sort number array
const numArray = [121, 13, 76, 34, 1, 987];
console.log(numArray.sort());
// if we use sort with number then internally it first convert number into
// string and then sort // it gives unexpected result
// to solve this problem we can pass callback function to sort
console.log('------------------------------');
console.log(numArray.sort((a, b) => a - b ));  // Assending order 1, 2, 3 like
console.log('------------------------------');
console.log(numArray.sort((a, b) => b - a ));  // Descending order 3, 2, 1 like

// sort element by length in string
const arr1 = ['Dfd', 'Cy', 'Aoiu', 'Bsdas', 'Esadasd'];
console.log(arr1.sort((a, b) => {
    return a.length - b.length;
}));

