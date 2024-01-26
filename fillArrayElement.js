const arr = [1, 5, 6, 10];
for(let i = 0; i < arr.length - 1; i++) {
    const ele = arr[i];
    const nextEle = arr[i + 1];
    const diff = nextEle - ele;

    if (diff > 1) {
        for(let j = 1; j < diff; j++) {
            arr.splice(i+j, 0, ele + j);
        }
    }
}
console.log(arr);
