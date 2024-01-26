// SET is work similar like Array but they have some differences
// Set not maintain order
// unique elements

// Creating Set
const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(2)
console.log(set1);

const set2 = new Set([1, 2, 2]);
console.log(set2);

// Add element
set2.add(6);
console.log(set2);

// Remove Element
set2.delete(6);
console.log(set2);

// element preset or not
console.log(set2.has(6));

// check length
console.log(set2.size);

// convert Array to Set
const arr = [1, 2, 3, 4, 3, 2, 1];
const setFromArr = new Set(arr);
console.log(setFromArr);

// convert set to Array
const set3 = new Set([1, 3, 6, 9]);
const arrFromSet = Array.from(set3);
console.log(arrFromSet);

// we can iterate Set element by forEach
// set3.forEach((ele) => {
//     console.log(ele);
// })
// for(let val of set3) {
//     console.log(val);
// }

// there is also another way to iterate Set element by converting set into Array

// Summary, important methods array add, delete, has

// MAP is similar to Object in js
// only difference is that map can have string type key

// Creating Map
const map3 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
]);
console.log(map3);

const map1 = new Map();

// Add Element
map1.set('asd', 1);
map1.set(3, 'sdf');
map1.set('sad', 'dg');
console.log(map1);

// Remove Element
map1.delete('asd');
console.log(map1);

// Check element
console.log(map1.has('sad'));

// Check lemngth
console.log(map1.size);

// How to Iterate
// map1.forEach((ele, index) => {
//     console.log(`element ${ele} index ${index}`);
// })
// for(let [index, ele] of map1.entries()) {
//     console.log(`element ${ele} index ${index}`);
// }

// Convert Object into Map
const obj = {
    name: 'John',
    age: 30,
    city: 'New York',
};
const map2 = new Map();
for(let key in obj) {
   map2.set(key, obj[key])
}
console.log(map2);

// Convert Map into Object
const myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);
myMap.set('city', 'New York');

const myObject = {};
for(let [key, value] of myMap) {
    myObject[key] = value;
}
console.log(myObject);