function primeNumbersUpTo100(num: number): void {

    for (let n = 2; n <= num; n++) {
        let prime = true;

        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                prime = false;
                break;
            }
        }

        if (prime) {
            console.log(n);
        }
    }
}
primeNumbersUpTo100(100);
