// implement bubble sort

function bubbleSort(arr) {
    for(let i = arr.length - 1; i>= 0; i--) {
        for(let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                // new syntax of swaping
                // we can also swap using temp
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
const sortedArray = bubbleSort([5, 3, 4, 1, 2]);
console.log('sortedArray ', sortedArray);
// if you want decendant change condition from if (arr[j] > arr[j + 1])
//  to if (arr[j] < arr[j + 1])