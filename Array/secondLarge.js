function findSecondLargest(arr) {
    if (arr.length < 2) {
      return "Array must contain at least two elements";
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    if (secondLargest === -Infinity) {
      return "No second largest element (all elements are the same)";
    }
  
    return secondLargest;
  }
  
  // Example usage
  let arr = [12, 35, 1, 10, 34, 1];
  console.log(findSecondLargest(arr)); // Output: 34
  