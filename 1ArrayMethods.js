const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// 1> slice(start, end)
// not change original array
// return new array contain part of original array
console.log(arr.slice(1, 4));
console.log(arr.slice(2));
console.log(arr.slice(-2));

// 2> splice
// change original array
// by adding, removing, updating element in array
// splice(index, noOfelementToRemove, elementToAddOrUpdate)
arr.splice(1, 0, 'b1')  // add element
arr.splice(1, 0, 'b2', 'b3')  // add multiple element
console.log(arr);
arr.splice(1, 3);       // Remove element
console.log(arr);
arr.splice(1, 1, 'b1');  // update element
console.log(arr);

// 3> reverse
// change original array reverse elements
console.log(arr.reverse());

// 4> concate
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);
console.log([...a1, ...a2]);

// 5> join method
// convert array into string
const arrayToStr = ['My', 'Name', 'Is', 'Awachar'];
const str = arrayToStr.join(' ');
console.log(str);

// 6> get Array Element
console.log(arrayToStr[1]);
// get last index of element
console.log(arrayToStr[arrayToStr.length -1]);

// Add element in Array
const arr4 = ['ori1', 'ori2', 'ori3'];
arr4.push('add1');   // Add last Index
console.log(arr4);
arr4.unshift('add2');  // Add firts Index
console.log(arr4);

// Remove Elements
const arr5 = ['ori1', 'ori2', 'ori3'];
arr5.shift(); // Remove First Element
console.log(arr5);
arr5.pop();  // Remove Last Element
console.log(arr5);

// Loop with Array
const arr6 = [100, 200, 40, -400, -300, -40];
// for(let i = 0; i < arr6.length; i++) {
//     console.log(arr6[i]);
// }

// Array.entries return [[0, 100], [1, 200], [3, -40], [4, 400]]
// of give value of Array
// for(let [index, value] of arr6.entries()){
//     console.log(index, value);
// }
// for(let value of arr6){
//     console.log(value);
// }

// in give Index
// for(let value in arr6){
//     console.log(value);
// }

// arr6.forEach((index, ele, arr) => {
//     console.log(`index ${index} element ${ele} original Array ${arr}`);
// })

// arr6.map(((index, ele, arr) => {
//     console.log(`index ${index} element ${ele} original Array ${arr}`);
// }))

// filter method
// console.log(arr6.filter((ele) => ele > 0));

// reduce method
// const result = arr6.reduce((initial, ele) => {
//     if (ele < 0) return initial;
//     return initial + ele;
// }, 0);
// console.log('Result ', result);

// find method
// const result = arr6.find((ele) => ele < 0);
// console.log(result);
// const result = arr6.findIndex((ele) => ele < 0);
// console.log(result);

// const result = [].concat([1, 3], [6, 7, 8], [0, 9, 8], 898);
// console.log('result ', result);

// fill(value, start, end)
// arr6.fill(0, 0, 2);
// console.log(arr6);

// flat method used to convert multi dimentional array into single dimentaional
// ex. [[1, 4], 6, [6, 8], 9, [9]]
// const arr7 = [[1, 4], 6, [6, 8], 9, [9, [91, 91]]];
// console.log(arr7.flat(2));

// flatMap it, combination of flat and Map
// const arr8 = [1, 2, 3, 4, 5];
// const newArray = arr8.flatMap((ele) => [ele, ele * 2]);
// console.log(newArray);

// console.log(arr6.includes(400));

// console.log(arr6.indexOf(-400));

// sort method, by default sort method sort array element based on string
// non-string element convert into string and then sort
// may cause unexprected result in numerical item
// console.log(arr6.sort());
// we can sort numerical element by passing function
// const sortArr6 = arr6.sort((a, b) => b - a);
// console.log(sortArr6);

// some
// const result2 = arr6.some((ele) => ele < 0);
// console.log(result2);

// every
// const result2 = arr6.every((ele) => ele < 0);
// console.log(result2);