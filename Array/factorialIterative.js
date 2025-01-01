function factorialIterative(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply result by the current number
    }

    return result;
}

// Example usage:
console.log(factorialIterative(5)); // Output: 120
console.log(factorialIterative(0)); // Output: 1
console.log(factorialIterative(-3)); // Output: "Factorial is not defined for negative numbers."
