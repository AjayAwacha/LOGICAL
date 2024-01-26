const nums = [1,2,3,4,5,6,7];
const k = 3;

function rotate(nums, k) {
    const newArra = nums.splice(nums.length - k);
    for(let i = newArra.length - 1; i >= 0; i--) {
        nums.unshift(newArra[i]);
    }
}
rotate(nums, k)
console.log(nums);
