function findLargestThreeDistinct(arr) {
    // Ensure the array has at least 3 distinct elements
    let uniqueArr = [...new Set(arr)];
    
    if (uniqueArr.length < 3) {
      return "Array must contain at least three distinct elements";
    }
  
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;
  
    // Iterate through the array to find the three largest distinct numbers
    for (let i = 0; i < uniqueArr.length; i++) {
      let num = uniqueArr[i];
      if (num > largest) {
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = num;
      } else if (num > thirdLargest) {
        thirdLargest = num;
      }
    }
  
    return [largest, secondLargest, thirdLargest];
  }
  
  // Example usage
  let arr = [10, 4, 3, 50, 23, 90];
  console.log(findLargestThreeDistinct(arr)); // Output: [90, 50, 23]
  