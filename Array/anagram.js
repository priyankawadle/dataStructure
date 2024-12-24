function areAnagrams(str1, str2) {
    // Helper function to count characters
    function countChars(str) {
        let charCount = {};
        for (let i = 0; i < str.length; i++) {
            let char = str[i].toLowerCase();
            if (char >= 'a' && char <= 'z') {
                charCount[char] = (charCount[char] || 0) + 1;
            }
        }
        return charCount;
    }

    // Count characters in both strings
    let count1 = countChars(str1);
    let count2 = countChars(str2);

    // Ensure both strings have the same characters
    for (let char in count2) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'ollhe'));   // true
console.log(areAnagrams('hello', 'world'));   // false
