function getUsersFromLocalStorage() {
  // Retrieve stored users from localStorage or return an empty array if none found
  var users = JSON.parse(localStorage.getItem("users")) || [];
  return users;
}
<<<<<<< HEAD

var button = document.getElementById("butt");
button.addEventListener("click", function() {
  var username = document.getElementById("username").value;  // Get the username entered
  var password = document.getElementById("pass").value;  // Get the password entered

  // Check if both username and password are entered
  if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;  // Don't proceed with the login if fields are empty
=======
var name = $("username").val()
var password = $("pass").val()
var newuser = Login(name,password)
<<<<<<< HEAD
var button= document.getElementById("butt")

 button.addEventListener("click",test)
 function test(){
   if (newuser.name ==="" || newuser.password==="") {
      alert('check your name and password');
 }
 else {
   alert('login succesfully');
   }
 }
=======
>>>>>>> 20be0803c443360d22be8ab7a0f1af69ef46463e
var array = [newuser]
var add=function(newuser){
  array.push(newuser)
}
var button= document.getElementById("butt")
 button.on("click",test)
 function test(){
   array.map(function(e){
    if(e.name!==name ||e.password!==password){
    alert("check your name and password");
    window.location.href="../pages/homepage.html"
    }
// localStorage.setItem("users",JSON.stringify(array))
// JSON.parse(localStorage.getItem("users"))
   })
>>>>>>> 6066afdc352ddf2ab9e7c456f4916f006e5d418b
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