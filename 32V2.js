// compare two object

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
    if(typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;
    if (obj1Length !== obj2Length) return false;

    for(let key in obj1) {
        if (!obj2.hasOwnProperty(key)) return false;

        if (obj1[key] === 'object' && obj2[key] === 'object' && obj1[key] !== null && obj2[key] !== null && !compareObj(obj1[key], obj2[key])) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}
compareObj(compareObj1, compareObj2);