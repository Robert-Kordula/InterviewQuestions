class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0: val;
        this.next = next === undefined ? null: next;
    }
}

// function removeNthFromEnd(head, n) {
//     let length = listSize(head);
//     console.log(length - n);

//     let node = getNodeAtN(head, length - n);
//     console.log(node);
//     return node;
// }

// function getNodeAtN(head, n) {
//     if (n === 0) {
//         return head.next;
//     }
//     n--;
//     return new ListNode(head.val, getNodeAtN(head.next, n));
// }

// function listSize(head) {
//     let count = 0; 
//     let node = head;
//     while (node) {
//         count++;
//         node = node.next;
//     }
//     return count;
// }

function removeNthFromEnd(head, n) {
    let first = head;
    let second = head;

    for (let i = 0; i < n; i++) {
        second = second.next;
    }
    if (!second) return head.next;

    while (second.next) {
        second = second.next;
        first = first.next;
    }
    first.next = first.next.next;
    return head;
}

function generateList(list) {
    if (list.length < 1) {
        return null;
    }

    let data = list.shift();
    let node = new ListNode(data, generateList(list));
    return node;
}

console.log(JSON.stringify(removeNthFromEnd(generateList([1, 2, 3, 4, 5]), 3)));