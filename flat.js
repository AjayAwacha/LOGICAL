let arr = [1, [2, 3], [4, [5, 6]], [7, [8, [9]]]];

Array.prototype.myFlat = function(depth = 1) {
    const result = [];
    for(let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            result = [...result, ...this[i].myFlat(depth - 1)]
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
const resultArr = arr.flat(3);
console.log(resultArr);
