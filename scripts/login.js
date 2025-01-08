var name= document.getElementById("username")
var password= document.getElementById("password")
var button= document.getElementById("butt")



function login(name,password){
   var obj={}
   obj.name=name
   obj.password=password
   obj.button=function(){
    if (this.name===null || this.password===null) {
       return 'please enter a name and password'
    }
    else { return 'login succesfully'}
   }
   return obj
}
var array = [newuser]
var newuser = login('','')

function addUser(array,newuser){
    array.push(newuser)
}

localStorage.set

