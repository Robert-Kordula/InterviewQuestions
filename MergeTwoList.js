function ListNode (val, next) {
    this.val = (val === undefined ? 0 : val)
    this. next = (next === undefined ? null : next)
}
let mergeTwoLists = (list1, list2) => {
    
    if (!list1) return list2;
    else if (!list2) return list1;

    if (list1.val < list2.val) {
        value = list1.val;
        list1 = list1.next;
    } else {
        value = list2.val;
        list2 = list2.next;
    }

    return new ListNode(val, mergeTwoLists(list1, list2));
}