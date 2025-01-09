function MakeParfume(name,img){
   var obj={}
   obj.name=name,
   obj.img=img
   return obj
}
var result=MakeParfume("","");
var array=[result];
var img=function(){
   img:"../photos/Burberry.jpg";
   img:"../photos/Adidas.jpg";
   img:"../photos/Britany Spears.jpg";
   img:"../photos/Coco.jpg";
   img:"../photos/Kilian.jpg";
   img:"../photos/Miss Dior.jpg";
   img:"../photos/Nike.jpg";
   img:"../photos/Scorpion.jpg";
   img:"../photos/Sior Maison.jpg";
   img:"../photos/Valentino Uomo.jpg";
}
var search=function(array,query){
    for(var i=0; i<array.lentgh; i++){
       if(array[i].img === query){
          return query
         }
         }
         return "undefined"
    }
