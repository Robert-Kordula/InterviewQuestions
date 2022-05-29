function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

let mergeKLists = (lists) => {
    console.log(lists);
    if (!lists.length) return null;

    let lowest = lists.shift();
    let unsorted = [];
    while (lists.length > 0) {
        let node = lists.shift();
        console.log(`Node: ${node}`);
        if (node !== null) {
            if (node.val < lowest.val) {
                unsorted.push(lowest);
                lowest = node;
            } else {
                unsorted.push(node);
            }
        }
    }
    return new ListNode(lowest.val, mergeKLists([lowest.next, ...unsorted]));
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
let test1 = generateNodesFromList([[1, 4, 5], [1, 3, 4], [2, 6]])
console.log(mergeKLists(test1));