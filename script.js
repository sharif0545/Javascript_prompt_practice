let validName = "Sharif";
let validPhone = "01911250545";
let validPassword = "123";

let user_password;
let user_text;
let user_phone;

function userInput() {
  // email input prompt box

  let user = prompt("Please enter phone or email:");
  if (user == null || user == "") {
    user_text = "Your email or phone?";
  } else {
    user_text = user;
  }
  document.getElementById("user").value = user_text;

  // password input prompt box

  let password = prompt("Your password:");
  if (password == null || password == "") {
    user_password = "Your password?";
  } else {
    user_password = password;
  }
  document.getElementById("password").value = user_password;
}

document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault(0);
  let user_text = document.getElementById("user").value;
  let user_password = document.getElementById("password").value;
  if (
    (user_text === validName || validPhone) &&
    user_password === validPassword
  ) {
    alert("Your are successfully loggedin!");
  } else {
    alert("Invalid User details!");
  }
});
