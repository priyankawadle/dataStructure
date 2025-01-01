function power(x, y) {
    if (y === 0) {
        return 1; // Any number raised to the power of 0 is 1
    }

    let result = 1;
    let isNegative = y < 0; // Check if the exponent is negative

    // Convert y to positive for simplicity
    y = Math.abs(y);

    for (let i = 1; i <= y; i++) {
        result *= x; // Multiply result by x for y times
    }

    // If the exponent was negative, return the reciprocal
    return isNegative ? 1 / result : result;
}

// Example usage:
console.log(power(2, 3));  // Output: 8 (2^3)
console.log(power(2, -3)); // Output: 0.125 (2^(-3))
console.log(power(5, 0));  // Output: 1 (5^0)
