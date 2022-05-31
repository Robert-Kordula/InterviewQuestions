function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// let mergeKLists = (lists) => {
//     if (!lists.length) return null;
//     if (lists.length === 1) return lists[0];
//     let lowest = lists.shift();
//     let unsorted = [];
//     while (lists.length > 0) {
//         let node = lists.shift();
//         if (node !== undefined && node !== null) {
//             if (lowest === null || node.val < lowest.val) {
//                 unsorted.push(lowest);
//                 lowest = node;
//             } else {
//                 unsorted.push(node);
//             }
//         }
//     }
//     if (lowest === null) return null;
//     if (lowest?.next) unsorted.push(lowest.next); 
//     return new ListNode(lowest?.val === undefined ? null : lowest.val, mergeKLists(unsorted));
// }

let mergeKLists = (lists) => {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    let mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
        if (i + 1 === lists.length) mergedLists.push(lists[i])
        else {
            mergedLists.push(mergeTwoLists(lists[i], lists[i+1]));
        }
    }
    return mergeKLists(mergedLists);
}

function mergeTwoLists(a, b) {
    if (!a) return b;
    else if (!b) return a;

    if (a.val < b.val) {
        value = a.val;
        a = a.next;
    } else {
        value = b.val;
        b = b.next;
    }

    return new ListNode(value, mergeTwoLists(a, b));
}
function generateNodesFromList(list) {
    let array = [];
    while (list.length > 0) {
        let node = generateNodes(list.shift());
        array.push(node);
    }
    return array;
}
function generateNodes(list) {
    if (!list.length) return null;
    return new ListNode(list.shift(), generateNodes(list));
}
let test1 = generateNodesFromList([[1, 4, 5], [1, 3, 4], [2, 6]]);
let test2 = generateNodesFromList([[]]);
let test3 = generateNodesFromList([[], []]);
let test4 = generateNodesFromList([[], [1]]);
let test5 = generateNodesFromList([[1], [0]]);
let test6 = generateNodesFromList([[2], [], [-1]]);
let test7 = generateNodesFromList([]);
console.log(JSON.stringify(mergeKLists(test1), null, 2));
console.log(mergeKLists(test2));
console.log(mergeKLists(test3));
console.log(mergeKLists(test4));
console.log(mergeKLists(test5));
console.log(mergeKLists(test6));
console.log(mergeKLists(test7));