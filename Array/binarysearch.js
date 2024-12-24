// function binarySearch(arr, element) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2);
//         if (arr[mid] == element) {
//             return mid;
//         } else if (arr[mid] < element) {
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
// }
// const arr = [10,20,40,70,90];// always sorted array required
// console.log(binarySearch(arr, 40))

// Recursive Approach
function binarySearch(arr, find) {
    let start = 0;
    let end = arr.length - 1;
  
    function recursiveCall(start, end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] == find) {
        return true;
      } else if (arr[mid] > find) {
        return recursiveCall(start, mid - 1);
      } else if (arr[mid] < find) {
        return recursiveCall(mid + 1, end);
      }
    }
    return recursiveCall(start, end);
  }
  
  const result = binarySearch([10, 30, 40, 50], 50);
  console.log(result);
  












