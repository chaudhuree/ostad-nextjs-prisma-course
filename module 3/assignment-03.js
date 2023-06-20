/*
1.Date Object:

a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

b. Implement the function to display the day of the week for the current date.
*/

// solution:

function getDayOfWeek(dateString) {
  const date = dateString ? new Date(dateString) : new Date();
  const daysarray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekIndex = date.getDay();
  const dayOfWeek = daysarray[dayOfWeekIndex];

  if (dateString) {

    console.log(`Your given date is ${dateString} and it is ${dayOfWeek}.`);
  } else {
    console.log(`Today is ${dayOfWeek}.`);
  }

  return dayOfWeek;
}

// Example usage with date provided
const date = '2023-06-21';
const dayOfWeek = getDayOfWeek(date);

// Example usage without date (uses current date)
const currentDayOfWeek = getDayOfWeek();


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
  return { num, isPrime: true }
};


function displayPrimeNumber(num) {
  const result = isPrimeNumber(num);
  if (result.isPrime) {
    if(result.num === 3) {
      console.log(`${result.num} is a prime number.and it is the smallest odd prime number.`);
      return;
    }
    console.log(`${result.num} is a prime number.`);
  } else {
    console.log(`${result.num} is not a prime number.`);
  }
}

displayPrimeNumber(7);

