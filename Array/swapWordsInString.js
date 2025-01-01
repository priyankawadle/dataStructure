function swapWordsInString(str, word1, word2) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Find the indices of the words to swap
    const index1 = words.indexOf(word1);
    const index2 = words.indexOf(word2);

    // Check if both words exist in the string
    if (index1 === -1 || index2 === -1) {
        return "One or both words not found in the string.";
    }

    // Swap the words
    [words[index1], words[index2]] = [words[index2], words[index1]];

    // Join the array back into a string
    return words.join(' ');
}

// Example usage:
const inputString = "The quick brown fox jumps over the lazy dog";
console.log(swapWordsInString(inputString, "quick", "lazy")); 
// Output: "The lazy brown fox jumps over the quick dog"

console.log(swapWordsInString(inputString, "cat", "dog")); 
// Output: "One or both words not found in the string."
