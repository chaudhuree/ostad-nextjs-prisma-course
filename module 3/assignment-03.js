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