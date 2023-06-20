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

/*
4.Window Object:

a. Create a function that opens a new window with a specified URL and dimensions (width and height).

b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
*/

// solution:
function openWindow(url, width, height) {
  window.open(url, '_blank', `width=${width},height=${height}`);
}


openWindow("https://www.example.com", 800, 600);

/*
5.Navigator Object:

a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

b. Implement the function to display the user's browser name and version.
*/

// solution:
// method 1
function getBrowserInfo() {
  const browserInfo = navigator.userAgent;
  return browserInfo;
}

function displayBrowserInfo() {
  const browserInfo = getBrowserInfo();
  console.log(`Browser info: ${browserInfo}`);
}

displayBrowserInfo();

// method 2
// note: appName and appVersion are deprecated
function detectBrowser() {
  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;

  console.log("Browser Name:", browserName);
  console.log("Browser Version:", browserVersion);
}

detectBrowser();

/*
6.Geolocation:

a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
*/

// solution:
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
      },
      function(error) {
        console.error("Error occurred while retrieving location:", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}
getUserLocation();


/*
7.JS Common Events:

Implement a webpage with the following functionality:

a. When the user clicks anywhere on the page, display an alert with the coordinates (x, y) of the click.

b. When the user presses any key on the keyboard, display an alert with the key code of the pressed key.

c. When the user moves the mouse over an image, change the image source to another image of your choice.
*/

// solution:
// note: solution in  assignment-03-07.html file




/*
8.HTML DOM Document:

a. Create a webpage with a button and a paragraph element.

b. Implement a JavaScript function that changes the text content of the paragraph element to "Button Clicked!" when the button is clicked.
*/

// solution:
// note: solution in  assignment-03-08.html file


/*
9.JS DOM Working with Form Input:

Implement a webpage with a form that has the following fields:

a. Name (text input)

b. Email (email input)

c. Password (password input)

d. Confirm Password (password input)

e. Submit (button)

Implement JavaScript validation for the form fields:

f. Name should not be empty and should contain only letters.

g. Email should be a valid email address.

h. Password should have a minimum length of 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit.

i. Confirm Password should match the Password field.

j. Display appropriate error messages for invalid fields.

*/

// solution:

// note: solution in  assignment-03-09.html file

/*
10.DOM Manipulate CSS Class:

a. Create a webpage with a button and a paragraph element.

b. Implement a JavaScript function that adds a CSS class named "highlight" to the paragraph element when the button is clicked. The "highlight" class should change the background color of the paragraph to yellow.
*/

// solution:

// note: solution in  assignment-03-10.html file


/*
11.Create Element & Append Element:

a. Create a webpage with an empty unordered list (<ul>).

b. Implement a JavaScript function that dynamically creates five list items (<li>) with sequential numbers (1 to 5) and appends them to the unordered list.

*/

// solution:

// note: solution in  assignment-03-11.html file

/*

12.DOM Change Attribute Value:

a. Create a webpage with an image element (<img>) that has an initial source URL.

b. Implement a JavaScript function that changes the source URL of the image element when a button is clicked. Use a different image URL of your choice.
*/

// solution:

// note: solution in  assignment-03-12.html file

/*
13.DOM Query Selector:

a. Create a webpage with multiple paragraphs containing different classes and IDs.

b. Implement a JavaScript function that selects all paragraphs with a specific class and changes their text color to red.
*/

// solution:

// note: solution in  assignment-03-13.html file

/*
14.AJAX Get Request:

a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".
*/

// solution:

function sendAjaxGetRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback('Error: ' + xhr.status);
    }
  };
  
  xhr.onerror = function() {
    callback('Request failed');
  };
  
  xhr.send();
}

// Usage:
sendAjaxGetRequest('https://api.example.com/data', function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
});


/*
15.AJAX Post Request:

a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".

b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.
*/

// solution:
const functionOfCallback = function(error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
};
function sendAjaxPostRequest(url, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(null, response);
      } else {
        callback('Error: ' + xhr.status);
      }
    }
  };
  
  xhr.onerror = function() {
    callback('Request failed');
  };
  
  xhr.send(JSON.stringify(data));
}



// Usage:
const url = 'https://api.example.com/submit';
const data = { "name": "John Doe", "email": "johndoe@example.com" };

sendAjaxPostRequest(url, data, functionOfCallback);
