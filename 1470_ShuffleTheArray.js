const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

const shuffle = (nums, n) => {
    const nums2 = nums.splice(n, n);
    console.log(nums, nums2);
    const output = [];
    while (nums2.length !== 0) {
        output.unshift(nums.pop(), nums2.pop());
    }
    return output;
};

console.log(shuffle(nums, n));
