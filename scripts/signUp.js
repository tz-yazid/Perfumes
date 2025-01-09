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
  button.addEventListener("click",test)
  function test(){
    array.map(function(e){
     if(e.name===name  || e.password===password ){
     window.location.href="../pages/login.html"
     }
    })
   }
  