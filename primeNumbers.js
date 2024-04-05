//Define or create a function("primeNum") to check if a number is prime.
function primeNum(number) {
    //a prime number is generally a number that is greater than 1 and can only be divided by itself.
        if (number <= 1)
             return false;
        if (number <= 3)
            return true;
        if (number % 2 === 0 || number % 3 === 0)
            return false;
    //use a while loop with 5 being the initialisation  to execute the block of code below
        let x = 5;
        while (x* x <= number) {
            if (number % x === 0 || number % (x + 2) === 0)
            return false;
            x += 6;
        }
        return true;
    }

    function filterPrimeNumbers(numbers) {
        return numbers.filter(number => primeNum(number));
    }

    //input your array of numbers to return an array containing prime numbers.
    const inputedArray = [];
    const primeNumbers = filterPrimeNumbers(inputedArray);
    (primeNumbers);