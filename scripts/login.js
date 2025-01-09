function getUsersFromLocalStorage() {
  // Retrieve stored users from localStorage or return an empty array if none found
  var users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}

var button = document.getElementById("butt");
button.addEventListener("click", function() {
  var username = document.getElementById("username").value;  // Get the username entered
  var password = document.getElementById("pass").value;  // Get the password entered

  // Check if both username and password are entered
  if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;  // Don't proceed with the login if fields are empty
  }

  var users = getUsersFromLocalStorage();  // Get users from localStorage

  // Use array.map to check if a user with matching username and password exists
  var userFound = false;
  users.map(function(e) {
      if (e.name === username && e.password === password) {
          userFound = true;
      }
  });

  if (userFound) {
      window.location.href = "../pages/homepage.html";  // Redirect to homepage if login is successful
  } else {
      alert("Invalid username or password.");
  }
});