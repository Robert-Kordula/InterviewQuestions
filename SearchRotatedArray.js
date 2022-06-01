// let search = function(nums, target) {
//     let index;
//     let end = nums.length - 1;
//     if (target === nums[0]) return 0;
//     else if (target == nums[end]) return end;
//     else if (target > nums[0]) {
//         index = 1;
//         while (target > nums[index]) {
//             index++;
//         }
//     }else if (target < nums[0] && nums[0] > nums[end]) {
//         index = end;
//         while (target < nums[index]) {
//             index--;
//         }
//     };
//     if (target === nums[index]) return index;
//     return -1;
// }

let search = function(nums, target) {
    let n = nums.length;
    let pivot = findPivot(nums, 0, n - 1);

    if (pivot === - 1) return binarySearch()
}

function findPivot(nums, low, high) {
    if (high < low) return -1;
    if (high === low) return low;

    let mid = Math.floor((low + high) / 2);

    if (mid < high && nums[mid] > nums[mid + 1]) return mid;

    if (mid > low && nums[mid] < nums[mid - 1]) return mid - 1;

    if (nums[low] >= nums[mid]) return findPivot(nums, low, mid - 1);

    return findPivot(nums, mid + 1, high);
}

function binarySearch(nums, low, high, key) {
    if (high < low) return -1;

    let mid = Math.floor((low + high) / 2);
    if (key === arr[mid]) return mid;

    if (key > arr[mid]) return binarySearch(nums, mid + 1, high, key);

    return binarySearch(nums, low, mid - 1, key);
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));