

// methods in js like indexOf, find used linear search Algorithm
// in Linear search we visit each item in array until element find
// in worse case we have to visit all element in array

function linearSearch(arr , charecter) {
    for(let i = 0; i < arr.length; i++) {
        if (charecter === arr[i]) return i;
    }
    return -1;
}
console.log(linearSearch(['a', 'z', 't', 'j', 'l'], 't'));


// Binary Search
// work only on sorted array
function binarySearch(sortedArr, charecter) {
    let leftPointer = 0;
    let rightPointer = sortedArr.length - 1;
    while(leftPointer <= rightPointer) {
        const middleIndex = Math.floor((leftPointer + rightPointer) / 2);
        if (sortedArr[middleIndex] === charecter) {
            return middleIndex;
        } else if (sortedArr[middleIndex] > charecter) {
            rightPointer = middleIndex - 1;
        } else {
            leftPointer = middleIndex + 1;
        }
    }
    return -1;
}
console.log(binarySearch(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'], 'j'));
