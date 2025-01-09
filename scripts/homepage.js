console.log("ok");
var perfume=document.getElementById('perfumename')
var imageperfume =document.getElementById('perfumeimg')


<<<<<<< HEAD
var search=function(array,query){
    for(var i=0; i<array.lentgh; i++){
       if(array[i].name === query){
          return query
         }
         }
         return "undefined"
    }
   
=======
var perfumes = [ { name: "adidas", img: "/photos/Adidas.jpg" }, { name: "burberry", img: "/photos/Burberry.jpg" }, { name: "britany", img: "/photos/Britany Spears.jpg" }, { name: "nike", img: "/photos/Nike.jpg" }, { name: "coco", img: "/photos/Coco.jpg" }, { name: "kilian", img: "/photos/Kilian.jpg" }, { name: "scorpion", img: "/photos/Scorpion.jpg" }, { name: "sior", img: "/photos/Sior Maison.jpg" }, { name: "valentino", img: "/photos/Valentino Uomo.jpg" } ];
function getperfume(){
for (let i = 0; i < pefumes.length; i++) {
   perfume = perfumes[i].name
   imageperfume=perfumes[i].img
}}

var reslult=$("#perfumeid")
var button=$("#button")
console.log(button,"buuton");
function search (perfumes,result){
   console.log("test")
   for(var i=0; i<perfumes.lentgh; i++){
      if(perfumes[i].name === result){
         $("#div").append(perfumes[i]);
        }
        }
        alert("undefined");
   }
   button.on("click", search);
>>>>>>> 15a4d96c7ebf95453e12bcec20d0515d1c8ed4af
