// Definition for singly-linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to merge two sorted linked lists
function merge(left, right) {
    let dummy = new ListNode(0); // Temporary dummy node
    let current = dummy;

    while (left !== null && right !== null) {
        if (left.val < right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }
        current = current.next;
    }

    // If any nodes are left in either list, append them
    if (left !== null) current.next = left;
    if (right !== null) current.next = right;

    return dummy.next; // Return the merged sorted list
}

// Function to find the middle of the linked list
function findMiddle(head) {
    let slow = head;
    let fast = head;

    // Use slow and fast pointers to find the middle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // Middle node
}

// Merge Sort for linked list
function mergeSort(head) {
    // Base case: if the list has 0 or 1 node, it's already sorted
    if (head === null || head.next === null) return head;

    // Step 1: Find the middle of the list
    let middle = findMiddle(head);
    
    // Step 2: Split the list into two halves
    let left = head;
    let right = middle.next;
    middle.next = null; // Break the list into two halves

    // Step 3: Recursively sort each half
    left = mergeSort(left);
    right = mergeSort(right);

    // Step 4: Merge the sorted halves
    return merge(left, right);
}

// Helper function to print the linked list
function printList(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}

// Example usage:
let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);

console.log("Original Linked List:");
printList(head);

let sortedHead = mergeSort(head);

console.log("Sorted Linked List:");
printList(sortedHead);
