function MakeParfume(name,img){
   var obj={}
   obj.name=name,
   obj.img=img
   return obj
}
var result=MakeParfume("","")
var array=[result]
var img=function(){
   
}
var search=function(array,query){
    for(var i=0; i<array.lentgh; i++){
       if(array[i].name === query){
          return query
         }
         }
         return "undefined"
    }
