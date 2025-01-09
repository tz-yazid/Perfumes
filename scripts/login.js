function getUsersFromLocalStorage() {
  var users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}

var button = document.getElementById("butt");
button.addEventListener("click", function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pass").value;
  if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
  }
  var users = getUsersFromLocalStorage();
  var userFound = false;
  users.map(function(e) {
      if (e.name === username && e.password === password) {
          userFound = true;
      }
  });

  if (userFound) {
      window.location.href = "../pages/homepage.html";
  } else {
      alert("Invalid username or password.");
  }
});