function bubblesortingArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) { // (length - i - 1) because the last elements are already sorted
            if (arr[j] < arr[j+1]) { // Compare adjacent elements
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log(arr)
    }
    return arr;
}
const arr = [50, 60, 30, 10, 80, 20]
console.log(bubblesortingArray(arr))











