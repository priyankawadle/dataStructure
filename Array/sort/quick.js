function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case: A single-element array is already sorted

    const pivot = arr[arr.length - 1]; // Choose the last element as the pivot
    const left = []; // Elements smaller than the pivot
    const right = []; // Elements greater than the pivot

    // Partition the array
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort left and right, then combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [10, 3, 15, 7, 8, 23, 98, 29];
console.log("Original Array:", array);
console.log("Sorted Array:", quickSort(array));
