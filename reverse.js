let arr = [1, 2, 3, 4, 5];

Array.prototype.myReverse = function() {
    let left = 0;
    let right = this.length - 1

    while(left < right) {
        const temp = this[right];
        this[right] = this[left];
        this[left] = temp;

        ++left;
        --right;
    }

    return this;
}
arr.myReverse();
console.log(arr); 