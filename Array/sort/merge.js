function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case: Array of 1 element is sorted

    const mid = Math.floor(arr.length / 2); // Find the middle index
    const left = mergeSort(arr.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(arr.slice(mid));  // Recursively sort the right half

    return merge(left, right); // Merge the two sorted halves
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    // Compare elements in left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]); // Add smaller element to result
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements
    return result.concat(left.slice(i), right.slice(j));
}
