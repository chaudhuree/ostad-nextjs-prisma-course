// Get references to form elements
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Event listener for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  clearErrors();

  // Validate form fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  // Submit form if all fields are valid
  if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// Function to clear error messages
function clearErrors() {
  document.querySelectorAll('.error').forEach(function(element) {
    element.textContent = '';
  });
}

// Function to validate Name field
function validateName() {
  const name = nameInput.value.trim();
  if (name === '') {
    displayError('nameError', 'Name is required');
    return false;
  } else if (!/^[a-zA-Z]+$/.test(name)) {
    displayError('nameError', 'Name should contain only letters');
    return false;
  }
  return true;
}

// Function to validate Email field
function validateEmail() {
  const email = emailInput.value.trim();
  if (email === '') {
    displayError('emailError', 'Email is required');
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    displayError('emailError', 'Invalid email format');
    return false;
  }
  return true;
}

// Function to validate Password field
function validatePassword() {
  const password = passwordInput.value;
  if (password.length < 8) {
    displayError('passwordError', 'Password should be at least 8 characters long');
    return false;
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    displayError('passwordError', 'Password should contain at least one uppercase letter, one lowercase letter, and one digit');
    return false;
  }
  return true;
}

// Function to validate Confirm Password field
function validateConfirmPassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (confirmPassword !== password) {
    displayError('confirmPasswordError', 'Passwords do not match');
    return false;
  }
  return true;
}

// Function to display error message for a field
function displayError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
}
