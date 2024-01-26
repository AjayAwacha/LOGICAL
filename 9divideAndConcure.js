// Problem
// polyfill of indexOf method

Array.prototype.myIndexOf = function (ele) {
    const myFunArr = this;
    for(let i = 0; i < myFunArr.length; i++) {
        if (myFunArr[i] === ele) return i;
    }
    return -1;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.myIndexOf(8));