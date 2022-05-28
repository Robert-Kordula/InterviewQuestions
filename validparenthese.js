// function isValid(s) {
//     let length = s.length;
//     if (length === 0) return true;
//     if (length % 2 === 1) {
//         return false;
//     }
//     let count = 1;
    
//     let l = 0;
//     let left = s.charAt(l);

//     let r = 1;
//     let right = s.charAt(r);
    
//     if (length === 2) return checkPairing(left, right);
//     if (left === ')' || left === '}' || left === ']') return false;
//     while (l < length - 1 && r < length) {
//         left = s.charAt(l);
//         right = s.charAt(r);
//         console.log(`${l} ${left} ${r} ${right}`);
//         if (left === right) {
//             count++;
//         } else if (checkPairing(left, right) && count < 2) {
//             let endString = s.slice(r + 1);
//             if (r - l === 1) {
//                 return isValid(endString);
//             } else {
//                 let innerString = s.slice(1, r);
                
//                 return isValid(innerString) && isValid(endString);
//             }
            
//         } else if (checkPairing(left, right) && count > 1) {
//             count--;
//         }
//         r++;
//     }
//     return false;
// }

// function checkPairing(l, r) {
//     let left = l.charCodeAt(0);
//     let right = r.charCodeAt(0);
//     if ((l === '(' && r === ')') || (left + 2 === right)) {
//         return true;
//     }
//     return false;
// }

function isValid(s) {
    let stack = [];
    const LEGEND = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    if (s.length % 2 === 1) return false;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s.charAt(i));
        } else if (LEGEND[stack.pop()] !== s[i]) {
            return false;
        }
    }
    return stack.length ? 0 : 1;
}
console.log(isValid('()[]{}'));
console.log(isValid('(){}]['));
console.log(isValid('[[[]'));