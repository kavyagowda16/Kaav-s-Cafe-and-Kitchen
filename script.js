// LOGIN PAGE BOM
function loginBOM() {

  // Prompt
  // let name = prompt("Enter your name to login:");

  // if (name === null || name.trim() === "") {
  //   alert("Login cancelled!");
  //   return false;
  // }

  // Confirm
  // let confirmLogin = confirm("Are you sure you want to login, " + name + "?");

  // if (confirmLogin) {
    // Alert
    alert("Login successful! Welcome " + name);
    window.location.href = "home.html"; // redirect
    return false;
  // } else {
  //   alert("Login cancelled!");
  //   return false;
  // }
}

// SIGNUP PAGE BOM
function signupBOM() {

  // Prompt
  // let name = prompt("Enter your name to create account:");

  // if (name === null || name.trim() === "") {
  //   alert("Account creation cancelled!");
  //   return false;
  // }

  // Confirm
  // let confirmSignup = confirm("Create account for " + name + "?");

  // if (confirmSignup) {
    // Alert
    alert("Account created successfully! Welcome " + name);
    window.location.href = "index.html"; // back to login
    return false;
  // } else {
  //   alert("Signup cancelled!");
  //   return false;
  // }
}

window.onload = function () {
  if (!getCookie("cookieConsent")) {
    showCookieNotice();
    disableForm();
  } else if (getCookie("cookieConsent") === "accepted") {
    enableForm();
  }
};

// Accept cookies
function acceptCookies() {
  setCookie("cookieConsent", "accepted", 30);
  document.getElementById("cookieNotice").style.display = "none";
  enableForm();
}

// Reject cookies
function rejectCookies() {
  setCookie("cookieConsent", "rejected", 30);
  document.getElementById("cookieNotice").style.display = "none";
  disableForm();
}

// Disable form
function disableForm() {
  document.getElementById("cookieNotice").style.display = "flex";

  document.querySelectorAll("#loginForm input, #loginForm button")
    .forEach(el => el.disabled = true);

  document.getElementById("formOverlay").style.display = "block";
}

// Enable form
function enableForm() {
  document.querySelectorAll("#loginForm input, #loginForm button")
    .forEach(el => el.disabled = false);

  document.getElementById("formOverlay").style.display = "none";
}

/* Cookie helpers */
function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  let cname = name + "=";
  let arr = document.cookie.split(";");
  for (let c of arr) {
    c = c.trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length);
    }
  }
  return "";
}

