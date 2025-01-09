function saveUserData(name, password) {
  var user = { name: name, password: password };
  // Retrieve existing users from localStorage or create an empty array if none exist
  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Use array.map to check and add the new user if not already existing
  users.map(function(e) {
      if (e.name !== name || e.password !== password) {
          // User is unique, proceed to add
          users.push(user);
      }
  });

  // Save the updated users list to localStorage
  localStorage.setItem("users", JSON.stringify(users));
}

var button = document.getElementById("butt");
button.addEventListener("click", function() {
  var username = document.querySelector("input[type=text]").value;  // Get the username
  var password = document.querySelector("input[type=password]").value;  // Get the password

  if (username === "" || password === "") {
      alert("Please enter both username and password.");
  } else {
      saveUserData(username, password);  // Save the user data to localStorage
      alert("Registration successful!");
      window.location.href = "../pages/login.html";  // Redirect to login page after successful registration
  }
});