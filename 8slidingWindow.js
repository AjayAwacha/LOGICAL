// Problem
// write function which accept one string
// we want to retun no of largest sequence unique charecter
// ex. hellothere  // 6 lother

function largestUniqueSequence(str) {
    let maxCount = 0;
    let set = new Set();
    for(let i = 0; i < str.length; i++) {
        if (set.has(str[i])) {
            if (maxCount < set.size) {
                maxCount = set.size;
            }
            set.clear();
            set.add(str[i]);
        } else {
            set.add(str[i]);
        }
    }
    return maxCount;
}
const result = largestUniqueSequence('hellothere');
console.log('result ', result);