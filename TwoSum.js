/* For each element [O(n)], we try to find the complement by searching [O(n)] the rest of the array 
*  Time Complexitiy:        O(n^2)
*  Storgage Complexitiy:    O(1)
*/
function twoSums(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
        
    }
}

/* Hashes every element in array, with the element as key and the index as the value [O(n)]
*  Traverse the list a second time to find the compliment in the hash look up table [O(1)]
*  Time Complexity:         0(n)
*  Storage Complexity:      0(n)
*/
function twoHash(nums, target) {
    let hashTable = new Map();
    for (let i = 0; i < nums.length; i++) hashTable.set(nums[i], i);

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashTable.has(complement) && hashTable.get(complement) != i) {
            return [i, hashTable.get(complement)];
        } 
    }
    return null;
}

/* Looks for the complement for every element in array via the lookup table [O(1)]
*  Hashes value in lookup table [O(n)]
*  Time Complexity:         O(n)
*  Storage Complexity:      O(n)
*/
function oneHash(nums, target) {
    let hashTable = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashTable.has(complement)) {
            //hashTable.set(nums[i], i); //Optional if you require all elements to be hashed
            return [i, hashTable.get(complement)];
        }
        hashTable.set(nums[i], i);
    }
    return null;
}
console.log('Two sums');
console.log(twoSums([2, 7, 1, 15], 9));
console.log(twoSums([3, 2, 4], 6));
console.log(twoSums([3, 3], 6));
console.log(twoSums([1, 7, 3, 10, 4, 8], 11));
console.log('Two Pass Hash');
console.log(twoHash([2, 7, 1, 15], 9));
console.log(twoHash([3, 2, 4], 6));
console.log(twoHash([3, 3], 6));
console.log(twoHash([1, 7, 3, 10, 4, 8], 11));
console.log('One Pass Hash');
console.log(oneHash([2, 7, 1, 15], 9));
console.log(oneHash([3, 2, 4], 6));
console.log(oneHash([3, 3], 6));
console.log(oneHash([1, 7, 3, 10, 4, 8], 11));