const strArr = ['d', 'b', 'c', 'a'];
// const numArr = [4, 52, 3, 1];

// console.log(strArr.sort());
// console.log(numArr.sort());

const compareFunc = (a, b) => a - b;
Array.prototype.mySort = function(compareFunc) {
    for(let i = 0; i < this.length - 1; i++) {
        for(j = 0; j < this.length - 1 - i; j++) {
            let swapneed = false;
            if (typeof compareFunc === 'function') {
                swapneed = compareFunc(this[j], this[j + 1]) > 1
            } else {
                swapneed = this[j] > this[j + 1]
            }

            if (swapneed) {

            }
        }
    }
    return this;
}

// How bubble sorting work
// function bubbleSort() {
//     let arr = [5, 3, 8, 4, 2];

//     for(let i = 0; i < arr.length - 1; i++) {
//         console.log('First ', arr[i]);

//         for(let j = 0; j < arr.length - 1 - i; j++) {
//             console.log('Secound ', arr[j + 1]);

//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }

//         }
//         console.log(arr);
//     }
//     console.log(arr);

// }
// bubbleSort();



