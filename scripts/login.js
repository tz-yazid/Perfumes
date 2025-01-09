function Login(name,password){
   var obj={}
   obj.name=name,
   obj.password=password
   return obj
}
var name = document.getElementById("username").value
var password = document.getElementById("pass").value
var newuser = Login(name,password)
var button= document.getElementById("butt")
 button.addEventListener("click",test)
 function test(){
   if (newuser.name ==="" || newuser.password==="") {
      alert('check your name name and password');
 }
 else {
   alert('login succesfully');
   }
 }
 var array = [newuser]
var add=function(newuser){
    array.push(newuser)
}
localStorage.getItem("users",array)
JSON.stringify(array)
JSON.parse(array)

