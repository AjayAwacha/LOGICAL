const arr = [1, 2, 4, 6, 10, 4, 2, 10, 10];
const friquency = {};
for(let i = 0; i < arr.length; i++) {
    friquency[arr[i]] = (friquency[arr[i]] || 0) + 1;
}

let maxFriquency = 0;
let maxElement = null;

for(let element in friquency) {
    if(friquency[element] > maxFriquency) {
        maxFriquency = friquency[element];
        maxElement = element;
    }
}
console.log(maxFriquency);
console.log(maxElement);