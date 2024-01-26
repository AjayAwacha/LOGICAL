// curring in js
// in js curring is technique to convert function which take multiple
// argument to the function which take single argument

function normalFun(a, b, c, d, e) {
    return a + b + c + d + e;
}
const result1 = normalFun(10, 20, 30, 40, 50);
console.log(result1);

function curringVersion(x) {
    return function(y) {
        if (y === undefined) {
            return x;
        }
        return curringVersion(x + y);
    }
}
const result2 = curringVersion(10)(20)(30)(40)(50)();
console.log(result2);