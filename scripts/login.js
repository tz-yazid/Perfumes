function Login(name,password){
   var obj={}
   obj.name=name,
   obj.password=password
   return obj
}
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
  }
 




