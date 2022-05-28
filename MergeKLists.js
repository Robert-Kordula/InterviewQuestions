function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : val);
}

let mergeKLists = (lists) => {
    console.log(JSON.stringify(lists));
    if (lists.length === 1) return lists[0];
    else if (lists.length === 0) return null;
    let lowest = lists[0];
    let unsortedList = [];
    while (lists.length > 0) {
        let node = lists.shift();
        if (node) {
            if (node.val < lowest.val) {
                lowest = node.val;
            }
            unsortedList.push(node);
        }
        console.log(lowest);
    }
    lowest = lowest.next;
    console.log(unsortedList);
    return new ListNode(lowest.val, mergeKLists(lists));
}

console.log(mergeKLists([{ "val": 1, "next": { "val": 4, "next": { "val": 5, "next": null } } }, { "val": 1, "next": { "val": 3, "next": { "val": 4, "next": null } } }, { "val": 2, "next": { "val": 6, "next": null } }]))