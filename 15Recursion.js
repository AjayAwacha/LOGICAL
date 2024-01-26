// recusrsion is function that called itself to solve particular problem.
// simply using we divide problem into smaller smaller part.
// Base condition : condition where recirsion end

// write function where we pass number want to print all number from that number to zero

function countDown(num) {
    if (num <= 0) {
        console.log('All Done');
        return;
    }
    console.log(num);
    countDown(--num);
}
countDown(5);

//create recursive function for some
// function accept input like 5 we want to return addition of 5 + 4 + 3 + 2 + 1
function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(--num);
}
console.log(sumRange(5));

