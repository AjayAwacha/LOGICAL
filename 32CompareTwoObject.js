
// create function for comparing two nested object.

// check key length of both array
// 
const compareObj1 = {
    name: 'Ajay Awachar',
    age: 30,
    address: {
        city: 'pune',
        pincode: 431504
    }
}

const compareObj2 = {
    name: 'Ajay Awachar',
    age: 30,
    address: {
        city: 'pune',
        pincode: 431504
    }
}

function compareObj(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

    const obj1KeyLength = Object.keys(obj1).length;
    const obj2KeyLength = Object.keys(obj2).length;
    if (obj1KeyLength !== obj2KeyLength) return false;

    for(let key in obj1) {
        if (!obj2.hasOwnProperty(key)) return false;

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if (!compareObj(obj1[key], obj2[key])) {
                return false;
            }
        } else if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(compareObj(compareObj1, compareObj2));