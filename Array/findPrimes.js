function findPrimes(n) {
    if (n < 2) return []; // No primes below 2

    const primes = [];

    for (let i = 2; i <= n; i++) {
        let isPrime = true;

        // Check divisors from 2 to √i
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i); // Add prime number to the list
        }
    }

    return primes;
}

// Example usage:
console.log(findPrimes(10));  // Output: [2, 3, 5, 7]
console.log(findPrimes(20));  // Output: [2, 3, 5, 7, 11, 13, 17, 19]
console.log(findPrimes(1));   // Output: []
