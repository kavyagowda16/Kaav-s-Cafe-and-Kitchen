// bom() function demonstrating alert, prompt, and confirm
function bom() {
  // Alert Example
  alert("Welcome to Kaav's Café and Kitchen!");

  // Prompt Example
  let userName = prompt("Please enter your name:", "Guest");

  if (userName === null || userName.trim() === "") {
    userName = "Guest";
  }

  // Confirm Example
  let isConfirm = confirm("Would you like to see the browser details, " + userName + "?");

  if (isConfirm) {
    // Display BOM info
    let txt = "";
    txt += "Hello " + userName + "!<br><br>";
    txt += "Browser Name: " + navigator.appName + "<br>";
    txt += "Browser Version: " + navigator.appVersion + "<br>";
    txt += "Cookies Enabled: " + navigator.cookieEnabled + "<br>";
    txt += "Screen Width: " + screen.width + "<br>";
    txt += "Screen Height: " + screen.height + "<br>";
    txt += "Current URL: " + window.location.href + "<br>";
    txt += "Hostname: " + window.location.hostname + "<br>";
    txt += "Inner Window Size: " + window.innerWidth + " x " + window.innerHeight + "<br>";
    document.getElementById("info").innerHTML = txt;
  } else {
    document.getElementById("info").innerHTML = "You canceled the request.";
  }
}
