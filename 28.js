// create function which accept two string first is main string and sub string
// we want to calculate how many times sub string present in main string

function nativeSearch(mainString, subString) {
    let counter = 0;
    for(let i = 0; i < mainString.length - subString.length + 1; i++) {
        let match = 0;
        for(let j = 0; j < subString.length; j++) {
            if (mainString[i + j] === subString[j]) {
                ++match;
            } else {
                break;
            }
            if (match === subString.length) {
                ++counter;
                break;
            }
        }
    }
    return counter;
}
nativeSearch('wowomgzomg', 'omg');