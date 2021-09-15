const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Event listener============>
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkUsername();
  checkEmail();
  checkPasswords();
});

// Show Error message============>
function showErrorMessage(input, message) {
  const formControl = input.parentElement;
  formControl.className = "col-12 mt-2 error";
  // show the message below input field.
  const errorMessage = formControl.querySelector("small");
  errorMessage.textContent = message;
}

// Show success outline================>
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "col-12 mt-2 success";
}

// validating username input=============>
function checkUsername() {
  const usernameValue = username.value.trim();
  const usernameLength = username.value.length;

  if (usernameValue === "") {
    showErrorMessage(username, "Username cannot be blank.");
  } else if (usernameLength < 6) {
    showErrorMessage(username, "Username must have at least 6 characters.");
  } else if (usernameLength > 20) {
    showErrorMessage(username, "Username must have maximum 20 characters.");
  } else {
    showSuccess(username);
  }
}

// Check Email input==================>
function checkEmail() {
  const emailValue = email.value.trim();
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  emailValue === ""
    ? showErrorMessage(email, "Email address cannot be blank.")
    : !re.test(emailValue)
    ? showErrorMessage(email, "Email not Valid")
    : showSuccess(email);
}

// Check Password fields==============>
function checkPasswords() {
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  passwordValue === ""
    ? showErrorMessage(password, "Password cannot be blank.")
    : showSuccess(password);

  if (confirmPasswordValue === "") {
    showErrorMessage(confirmPassword, "Password cannot be blank.");
  } else if (passwordValue !== confirmPasswordValue) {
    showErrorMessage(confirmPassword, "Passwords do not match");
  } else {
    showSuccess(password);
    showSuccess(confirmPassword);
  }

  // Check the length of passwords.
  if (password.value.length < 8) {
    showErrorMessage(password, "Password must be at least 8 characters long.");
  } else if (password.value.length > 20) {
    showErrorMessage(password, "Password must be less than 20 characters.");
  }
}