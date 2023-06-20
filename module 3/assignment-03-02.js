/*
2.Math Object:

a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

b. Implement the function to display the square root of the sum of squares for an array of numbers.
*/

// solution:

function sqrRoot(numbers) {
  const sumOfSqrNum = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  const sqrRootOfSum = Math.sqrt(sumOfSqrNum);
  return sqrRootOfSum;
}

function displaySqrRootOfSumOfSqr(numbers) {
  const result = sqrRoot(numbers);
  console.log(`The given numbers are: ${numbers}`)
  console.log(`The square root of the sum of squares is: ${result}`);
}
const num = [0, 3, 4];
displaySqrRootOfSumOfSqr(num);
