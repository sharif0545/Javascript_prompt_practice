// email input prompt box

function emailInput() {
  let user_text;
  let user = prompt("Please enter phone or email:");
  if (user == null || user == "") {
    user_text = "Your email or phone?";
  } else {
    user_text = user;
  }
  document.getElementById("user").value = user_text;
}

// password input prompt box

function passwordInput() {
  let user_password;
  let password = prompt("Your password:");
  if (password == null || password == "") {
    user_password = "Your password?";
  } else {
    user_password = password;
  }
  document.getElementById("password").value = user_password;
}
