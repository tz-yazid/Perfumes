function Login(name,password){
   var obj={}
   obj.name=name
   obj.password=password
   return obj
}
var newuser = Login('','')
var array = [newuser]
var name = document.getElementById("username")
var password = document.getElementById("password")
var button= document.getElementById("butt")
 button.addEventListener("click",test)
 function test(){
   if (this.name===null || this.password===null) {
    return 'please enter a name and password'
 }
 else {
     return 'login succesfully'
    }
 }
var add=function(newuser){
    array.push(newuser)
}
var search=function(array,query){
for(var i=0; i<array.lentgh; i++){
   if(array[i].name === query){
      return query
     }
     }
     return "undefined"
}
localStorage.setItem("users",array)
JSON.stringify(array)
JSON.parse(array)

