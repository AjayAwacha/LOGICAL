// create your own function for PromiseAll implementation

// Hint Write for insid promise

function myPromiseAll(promiseArray) {
    let status = [];
    return new Promise((resolve, reject) => {
        for(let i = 0; i < promiseArray.length; i++) {
            promiseArray[i].then((data) => {
                status.push(data);
                if (status.length === promiseArray.length) {
                    resolve(status);
                }
            }).catch((err) => {
                reject(err);
            })
        }
    });
}

const promise1 = new Promise((resolve, reject) => {
    resolve(true);
});
const promise2 = new Promise((resolve, reject) => {
    // resolve(true);
    reject(new Error('My Promise error promise2'))
});
const promise3 = new Promise((resolve, reject) => {
    resolve(true);
});
const promiseArray = [promise1, promise2, promise3];
const result = myPromiseAll(promiseArray)
result.then((data) => {
    console.log('your custom promise All resolve :: ', data);
})
.catch((err) => {
    console.log('your custom promise reject ::', err);
});
