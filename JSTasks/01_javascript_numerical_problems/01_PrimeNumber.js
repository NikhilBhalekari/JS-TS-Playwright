function isPrime(n) {
    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));

// Print all prime numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}