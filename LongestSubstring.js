/* For every character O(n) loops through rest of string adding it to the substring O(n)
*  Before adding new character to substring it checks through substring to see if 
*  character exists O(n)
*  Time Complexity: O(n^3)
*/
function longestSubstring(s) {
    let longest = {
        subString: '',
        length: 1
    };
    console.log(s);
    for (let i = 0; i < s.length; i++) {
        let subString = s.charAt(i);
        let length = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (!subString.includes(s.charAt(j))) {
                subString += s.charAt(j);
                length++;
            } else {
                if (length > longest.length) {
                    longest.length = length;
                    longest.subString = subString;
                }
                break;
            }
        }
    }
    return longest;
}

/* Starts with left and right of 0 to use for 'sliding window'
*  For each character O(n), checks hash for character O(1), if it doesn't exist store with 
*  character as key and value 1, if it already exists increments the value of that key by 1
*  If hash value of character is greater than 1, duplicate exists in current substring, sets 
*  left window back 1 and slides left window +1
*  With each loop it determines if the difference between the current window is larger than
*  The current largest substring found
*  Time Complexity: O(2n) in worst case where every character is the same and visited twice
*  O(n) 
*/ 
function slidingWindow(s) {
    let hash = {};
    let left = 0;
    let right = 0;
    let res = 0;
    let substring = '';
    while (right < s.length) {
        let r = s.charAt(right);
        hash[r] ? hash[r]++ : hash[r] = 1;
        substring+= r;
        if (hash[r] > 1) {
            let l = s.charAt(left);
            hash[l]--;
            left++;
        }
        res = Math.max(res, right - left + 1);
        right++;
        //console.log(`${JSON.stringify(hash)} left:${left}|${s.charAt(left)} right:${right}|${s.charAt(right)} longest:${res}`);
    }
    return res;
}

/* For each character O(n) checks if it was already hashed O(1), if it was already hashed
*  move the left of the window to the largest of either the current index or the hashed index
*  Time Complexity: O(n) best and worst case
*/
function optimsedSlidingWindow(s) {
    let hash = {};
    let res = 0;
    let i = 0;
    for (let j = 0; j < s.length; j++) {
        let char = s.charAt(j);
        if (hash[char]) i = Math.max(hash[char], i);
        res = Math.max(res, j - i);
        hash[char] = j;
        console.log(`i: ${i} \tj:${j}\n${JSON.stringify(hash)}`);
    }
    return res;
}

// //Brute force
// console.log(longestSubstring('bacabcbb'));
// console.log(longestSubstring('bbbb'));
// console.log(longestSubstring('pwwkew'));

// //Sliding window
// console.log('SLIDING WINDOW');
// console.log(slidingWindow('abcabcbb'));
// console.log(slidingWindow('bbbb'));
// console.log(slidingWindow('pwwkew'));

//Optimised sliding window
console.log(optimsedSlidingWindow('bacabcbb'));
console.log(optimsedSlidingWindow('bbbb'));
console.log(optimsedSlidingWindow('pwwkew'));