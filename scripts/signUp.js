function saveUserData(name, password) {
  var user = { name: name, password: password };
  var users =  [];
  
          users.push(user);
  
  localStorage.setItem("users", JSON.stringify(users));
}
var button = document.getElementById("butt");
button.addEventListener("click", function() {
  var username = document.querySelector("input[type=text]").value;  
  var password = document.querySelector("input[type=password]").value;  

  if (username === "" || password === "") {
      alert("Please enter both username and password.");
  } else {
      saveUserData(username, password);
      alert("Registration successful!");
      window.location.href = "../pages/login.html";
  }
});