let search = function(nums, target) {
    let n = nums.length - 1;
    let pivot = findPivot(nums, 0, n);

    if (pivot === -1) return binarySearch(nums, 0, n, target);

    if (target === nums[pivot]) return pivot;

    if (nums[0] <= target) return binarySearch(nums, 0, pivot - 1, target);

    return binarySearch(nums, pivot + 1, n, target);
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
    if (key === nums[mid]) return mid;

    if (key > nums[mid]) return binarySearch(nums, mid + 1, high, key);

    return binarySearch(nums, low, mid - 1, key);
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));