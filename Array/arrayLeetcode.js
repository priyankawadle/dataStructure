// Check if pair with the given Sum exists in Array
// function pairExists(arr, target) {
//   let set1 = new Set(arr);
//   console.log(set1);
//   for (let i = 0; i < arr.length; i++) {
//     let compliment = target - arr[i];
//     if (set1.has(compliment) && compliment != arr[i]) {
//       return [arr[i], compliment];
//     }
//   }
// }
// const result = pairExists([10, 8, 12, 15, 5], 20);
// console.log(result);
/*******************************************************************************************/
// Find duplicates
// Input:  [1, 2, 3, 6, 3, 6, 1]
// Output: 1, 3, 6
// function findDupllicate(arr){
// let set1 = new Set();
// let outputarr=[]
// for(let i=0;i<arr.length;i++){
//     if(!set1.has(arr[i])){
//         set1.add(arr[i])
//     }else{
//      outputarr.push(arr[i])
//     }
// }
// return outputarr;
// }
// const result = findDupllicate([1, 2, 3, 6, 3, 6, 1])
// console.log(result)
/********************************************************************************************/
// Product of Array Except Self
// Input: arr[] = {10, 3, 5, 6, 2}
// Output: prod[] = {180, 600, 360, 300, 900}
// function productArray(arr) {
//   let outputarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let prod = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         prod = prod * arr[j];
//       }
//     }
//     outputarr.push(prod);
//   }
//   return outputarr;
// }
// const result = productArray([10, 3, 5, 6, 2]);
// console.log(result);
// function productArray(arr) {
//     const n = arr.length;
//     const prefix = new Array(n).fill(1);
//     const suffix = new Array(n).fill(1);
//     const outputarr = new Array(n);

//     // Calculate prefix products
//     for (let i = 1; i < n; i++) {
//       prefix[i] = prefix[i - 1] * arr[i - 1];
//     }

//     // Calculate suffix products
//     for (let i = n - 2; i >= 0; i--) {
//         console.log(i,suffix[i],arr[i])
//       suffix[i] = suffix[i + 1] * arr[i + 1];
//     }
//     console.log(prefix,suffix)

//     // Calculate the final output array
//     for (let i = 0; i < n; i++) {
//       outputarr[i] = prefix[i] * suffix[i];
//     }

//     return outputarr;
//   }

//   const result = productArray([10, 3, 5, 6, 2]);
//   console.log(result); // Output: [180, 600, 360, 300, 900]
/*********************************************************************************************** */
// Maximum Subarray Sum – Kadane’s Algorithm
// Input: {
//   2, 3, -8, 7, -1, 2, 3;
// }
// Output: 11;
// function findSubarray(arr) {
//   let outputarr = [];
//   let res = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i+1; j < arr.length; j++) {
//       sum = sum + arr[j];
//     }
//     res= Math.max(res,sum)
//   }

//   return res;
// }
// const result = findSubarray([2, 3, -8, 7, -1, 2, 3]);
// console.log(result)
/******************************************************************************************************************* */
// Maximum Product Subarray
// Input: arr[] = {-2, 6, -3, -10, 0, 2}
// Output: 180
// function maxProductArr(arr) {
//   let res = 1;
//   for (let i = 0; i < arr.length; i++) {
//     let prod = 1;
//     for (let j = i; j < arr.length; j++) {
//       prod = prod * arr[j];
//       res = Math.max(res, prod);
//     }
//   }
//   return res;
// }
// const result = maxProductArr([6, -2, -3, -10, 0, 2]);
// console.log(result);
/************************************************************************************************************************** */
// Find Minimum in Rotated Sorted Array
// function findMin(arr){
// let min = arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// return min;
// }
// const result = findMin([6, -2, -3, -10, 0, 2])
// console.log(result)// o(n)

// function findMinEle(arr) {
//   let start = 0;
//   let end = arr.length-1;
//   let min = arr[0];
//   function recursiveCall(arr, start, end) {
//     if (start > end) {
//       return min;
//     }
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] < min) {
//       min = arr[mid];
//       return recursiveCall(arr, mid + 1, end);
//     } else {
//       return recursiveCall(arr, start, mid - 1);
//     }
//   }
//   return recursiveCall(arr, start, end);
// }
// const result = findMinEle([6, -2, -3, -10, 0, 2]);
// console.log(result); // o(logn)
/*********************************************************************************************************** */
// Search in Rotated Sorted Array
// function searchArr(arr, find) {
//   let start = 0;
//   let end = arr.length-1;
//   function recursiveCall(arr, start, end) {
//     if (start > end) {
//         return false;
//       }
//     let mid = Math.floor((start + end) / 2);

//     if (find === arr[mid]) {
//       return mid;
//     } else if (arr[mid] < find) {
//       return recursiveCall(arr, mid + 1, end);
//     } else {
//       return recursiveCall(arr, start, mid - 1);
//     }
//   }
//   return recursiveCall(arr, start, end);
// }
// const result = searchArr([-2,-1,6,10,20,30.40], -2);
// console.log(result);
/********************************************************************************************************** */
// 3 Sum-Find All Triplets with Zero Sum
// Input: arr[] = {0, -1, 2, -3, 1}
// Output: {{0, 1, 4}, {2, 3, 4}}
// JavaScript program to find triplet with sum zero
// using three nested loops

// function findTriplets(arr) {
//     const res = [];
//     const n = arr.length;

//     // Generating all triplets
//     for (let i = 0; i < n - 2; i++) {
//         for (let j = i + 1; j < n - 1; j++) {
//             for (let k = j + 1; k < n; k++) {

//                 // If the sum of triplet equals to zero
//                 // then add it's indexes to the result
//                 if (arr[i] + arr[j] + arr[k] === 0) {
//                     res.push([i, j, k]);
//                 }
//             }
//         }
//     }
//     return res;
// }

// const arr = [0, -1, 2, -3, 1];
// const res = findTriplets(arr);
// res.forEach(triplet => {
//     console.log(triplet[0] + " " + triplet[1] + " " + triplet[2]);
// });
/******************************************************************************************************* */
// Longest substring without repeating characters
// Input: “ABCBC”
// Output: 3
// function longestSubstring(str1) {
//   let set1 = new Set();
//   for (let ch of str1) {
//     if (!set1.has(ch)) {
//       set1.add(ch);
//     } else {
//       break;
//     }
//   }
//   return set1.size;
// }
// const result = longestSubstring("AAA");
// console.log(result);
/********************************************************************************************************** */
// Longest Repeating Character Replacement
// Input : str = "geeekk"
// Output : e
// function longestRepeat(str1){
//  let set1 = {};
//  for(let ch of str1){
//     set1[ch]=(set1[ch]|| 0 )+1;
//  }
//  let maxChar = '';
//  let maxCount = 0;

//  for (let ch in set1) {
//    if (set1[ch] > maxCount) {
//      maxCount = set1[ch];
//      maxChar = ch;
//    }
//  }

//  return maxChar;
// }
// const result = longestRepeat('geeekkkkkk')
// console.log(result)
/******************************************************************************************************** */
// Smallest window in a String containing all characters of other String
// Input: S = “timetopractice”, P = “toc”
// Output: toprac
// Explanation: “toprac” is the smallest substring in which “toc” can be found.
// function containingSubStr(str1,substr1){
// //generate all substrings
// // check which substrings conatins all given charachters
// // after that check length of susbtrings which contains all given charachters
// // retunn length and string which having min length
// }

// const result = findSmallestSubstring('timetopractice','toc')
/***************************************************************************************************** */
// Check if two Strings are Anagrams of each other
// Input: s1 = “geeks”  s2 = “kseeg”
// Output: true
// function checkAnagrams(s1, s2) {
//   function countChars(str1) {
//     let set = {};
//     for (let ch of str1) {
//       set[ch] = (set[ch] || 0) + 1;
//     }
//     return set;
//   }
//   let countstr1 = countChars(s1);
//   let countstr2 = countChars(s2);

//   for (let ch in countstr1) {
//     if (countstr1[ch] !== countstr2[ch]) {
//       return "not anagrams";
//     }
//   }
//   return "anagrams";
// }
// const result = checkAnagrams("geekss", "kseeg");
// console.log(result);
/***************************************************************************************************** */
// print all anagrams together
// Input: arr[] = [“act”, “god”, “cat”, “dog”, “tac”]
// Output: [[“act”, “cat”, “tac”], [“god”, “dog”]]
// function printAllAnagrams(arr) {
//   function countChars(str1) {
//     let set = {};
//     for (let ch of str1) {
//       set[ch] = (set[ch] || 0) + 1;
//     }
//     return JSON.stringify(Object.entries(set).sort());
//   }
//   let map = {};
//   for(let ch of arr){
//     let count = countChars(ch);
//     if (!map[count]) {
//         map[count] = [];
//       }
//       map[count].push(ch); // Group anagrams
//   }
//   return Object.values(map);
// }
// const result = printAllAnagrams(["act", "god", "cat", "dog", "tac"]);
// console.log(result)

/************************************************************************************************* */
// Sentence Palindrome
// Input: s = “Too hot to hoot”
// Output: True
// function checkPalindrome(str) {
//   let str1 = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       str1 = str1 + str[i];
//     }
//   }
//   str1 = str1.toLocaleLowerCase();

//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== " ") {
//       reverseStr = reverseStr + str[i];
//     }
//   }
//   reverseStr = reverseStr.toLocaleLowerCase();

//   if (str1 === reverseStr) {
//     return "palindrome";
//   } else {
//     return "not palindrome";
//   }
// }
// const result = checkPalindrome("Too hot to hoot");
// console.log(result);
/******************************************************************************************************** */
