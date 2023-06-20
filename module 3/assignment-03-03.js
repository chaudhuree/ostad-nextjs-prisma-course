/*
3.Numbers:

a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.

b. Implement the function to check if a given positive integer is a prime number.
*/

// solution:
//  a prime number is a number that cannot be evenly divided by any other number except 1 and itself

function isPrimeNumber(num) {
  if (num <= 1) {
    return { num, isPrime: false };
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return { num, isPrime: false };
    }
  }
  return { num, isPrime: true };
}

function displayPrimeNumber(num) {
  const result = isPrimeNumber(num);
  if (result.isPrime) {
    if (result.num === 3) {
      console.log(
        `${result.num} is a prime number.and it is the smallest odd prime number.`
      );
      return;
    }
    console.log(`${result.num} is a prime number.`);
  } else {
    console.log(`${result.num} is not a prime number.`);
  }
}

displayPrimeNumber(1);
displayPrimeNumber(3);
displayPrimeNumber(7);
