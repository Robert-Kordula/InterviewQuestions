let search = function(nums, target) {
    let index;
    let end = nums.length - 1;
    if (target === nums[0]) return 0;
    else if (target == nums[end]) return end;
    else if (target > nums[0]) {
        index = 1;
        while (target > nums[index]) {
            index++;
        }
    }else if (target < nums[0] && nums[0] > nums[end]) {
        index = end;
        while (target < nums[index]) {
            index--;
        }
    };
    if (target === nums[index]) return index;
    return -1;
}


console.log(search([4, 5, 6, 7, 0, 1, 2], 0));