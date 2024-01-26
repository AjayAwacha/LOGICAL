// create function that accept object as argument and return new copy of that object

function deepCopy(obj) {
    const newObj = {};
    for(let key in obj) {
        if (typeof obj[key] !== 'object' || obj[key] === null) {
            newObj[key] = obj[key];
        } else {
            newObj[key] = deepCopy(obj[key]);
        }
    }
    return newObj;
}

const objA = {
    key1: 'value1',
    key2: 10,
    key3: {
        subkey1: 'subvalue'
    }
}
const objB = deepCopy(objA)