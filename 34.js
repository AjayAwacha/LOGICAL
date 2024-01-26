// merge two Object

function mergeTwoObj(obj1, obj2) {
    const newObj = JSON.parse(JSON.stringify(obj1));
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return 'input must of type object';
    for(let key in obj2) {
        newObj[key] = obj2[key];
    }
    return newObj;
}

const a1 = {
    key1: 'value1',
    key2: 'value1',
    key4: {
        subkey1: 'subkey1'
    }
}

const a2 = {
    key2: 'value2',
    key3: 'value3',
    key4: {
        subkey2: 'subkey2'
    },
    key5: {

    }
}

const mergedObj = mergeTwoObj(a1, a2);
console.log('merge objcet ', mergedObj);