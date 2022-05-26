/* For every character O(n)
*  Time Complexity: O((n^2)/2) = O(n^2) 
*/ 
function longestPalindromic(s) {
    let length = 0;
    let res = '';
    for (let i = 0; i < s.length - 1; i++) {
        let left = i;
        let right = i + 1;
        let string = s.charAt(left);
        if (s.charAt(left) !== s.charAt(right)) {
            right = left;
        } else {
            string += s.charAt(right);
        }
        while (s.charAt(left) === s.charAt(right) && s.charAt(left)) {
            let len = right - left + 1;
            if (len > length) {
                length = len;
                res = string;
            }
            right++;
            left--;
            string = s.charAt(left) + string + s.charAt(right);
        }
    }
    return res;
}

let testCases = ['anna', 'civic', 'kayak', 'level', 'madam', 'mom', 'noon', 'racecar', 'radar', 'redder', 'refer', 'repaper', 'rotator', 'rotor', 'sagas', 'solos', 'stats', 'tenet', 'wow'];

for (let i = 0; i < testCases.length; i++) {
    console.log(`${testCases[i]}\n${longestPalindromic(testCases[i])}`);
}