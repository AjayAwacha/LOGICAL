// write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with
// the length of the number passed to the function.
// array element must in sequence not random in Array

// Example 
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

function maxSubarraySum(arr, count) {
    if (arr.length < count) return null;
    let maxSub = 0;
    for(let i = 0; i < arr.length - count + 1; i++) {
        let tempSum = 0
        for(let j = 0; j < count; j++) {
            tempSum += arr[i + j];
        }
        if (maxSub <= tempSum) {
            maxSub = tempSum;
        }
    }
    return maxSub;
}
console.log(maxSubarraySum([100,200,300,400], 2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([2,3], 3));