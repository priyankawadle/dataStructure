function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // Assume the first unsorted element is the smallest

        // Find the index of the smallest element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the smallest element with the first unsorted element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // ES6 destructuring for swapping
        }
    }

    return arr;
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Original Array:", array);
console.log("Sorted Array:", selectionSort(array));
