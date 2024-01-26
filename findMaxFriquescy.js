const arr = [1, 2, 4, 6, 10, 4, 2, 10, 10];
let friquescy = new Map();
for(let i = 0; i < arr.length; i++) {
    if (friquescy.has(arr[i])) {
        let count = friquescy.get(arr[i]);
        friquescy.set(arr[i], ++count);
    } else {
        friquescy.set(arr[i], 1);
    }
}

let maxElement = null;
let maxFriquency = 0;

for ([key, value] of friquescy) {
    if (maxFriquency < value) {
        maxFriquency = value;
        maxElement = key;
    }    
}
console.log(maxElement);
console.log(maxFriquency);