function generateAllSubarrays(arr) {
    let subarrays = [];
  
    // Iterate over each starting index
    for (let start = 0; start < arr.length; start++) {
      // Generate subarrays starting from index `start`
      for (let end = start; end < arr.length; end++) {
        // Create subarray from start to end (inclusive)
        let subarray = arr.slice(start, end + 1);
        subarrays.push(subarray);
      }
    }
  
    return subarrays;
  }
  
  // Example usage
  let arr = [1, 2, 3];
  let result = generateAllSubarrays(arr);
  
  // Output all subarrays
  console.log(result);
  