function Login(name,password){
   var obj={}
   obj.name=name,
   obj.password=password
   return obj
}
var name = $("username").val()
var password = $("pass").val()
var newuser = Login(name,password)
var array = [newuser]
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
 
var add=function(newuser){
    array.push(newuser)
}



