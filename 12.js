// Write a function called averagePair. 
// Given a sorted array of integers and a target average, 
// determine if there is a pair of values in the array where the 
// average of the pair equals the target average

// Example averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, avg) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex < rightIndex) {
        const currentAvg = (arr[leftIndex] + arr[rightIndex]) / 2;
        if (currentAvg === avg) {
            return true;
        } else if (currentAvg > avg) {
            --rightIndex;
        } else {
            ++leftIndex;
        }
    }
    return false;
}
// const avgResult = averagePair([1,2,3], 2.5);
const avgResult = averagePair([-1,0,3,4,5,6], 4.1)
console.log(avgResult);