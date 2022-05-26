/* For every height O(n), check against every other height in array
*  calculating the area, checking if it is larger than the largest
*  recorded area
*  Time Complexity: O(n^2)
*/
// function containerNaive(arr) {
//     let res = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = arr.length - 1; j > i; j-- ) {
//             let height = Math.min(arr[i], arr[j]);
//             let area = height * (j- i);
//             res = Math.max(res, area);
//         }
//     }
//     return res;
// }

/* Starts with pointers pointed at the start and end of the array, every loop checks
*  which pointer has the lowest value, uses this value to calculate the area then 
*  if the area calculated is bigger than the max sets new max, this is run until left
*  and right pointers meet O(n)
*  Time Complexity: O(n)
*/
function containerWithMostWater(arr) {
    let res = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        res = Math.max((right - left) * Math.min(height[left], height[right]), res);
        if (arr[left] >= arr[right]) {
            right--;
        } else if (arr[left] <= arr[right]) {
            left++;
        }
    }
    return res;
}