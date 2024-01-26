// function a(b) {
//     b();
// }
// a(function() {
//     console.log('I am Callback Function');
// });
// console.log('This is Text');

// Main Intension of callback is to execute after specific task is complete

function performTask(callback) {
    const data = 'data is here';
    callback(data);
}

function showTask(arg) {
    console.log(arg);
}
performTask(showTask);