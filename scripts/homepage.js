var perfumes = [ { name: "adidas", img: "../photos/Adidas.jpg" }, { name: "burberry", img: "../photos/Burberry.jpg" }, { name: "britany", img: "../photos/BritanySpears.jpg" }, { name: "nike", img: "../photos/Nike.jpg" }, { name: "coco", img: "../photos/Coco.jpg" }, { name: "kilian", img: "../photos/Kilian.jpg" }, { name: "scorpion", img: "../photos/Scorpion.jpg" }, { name: "sior", img: "../photos/SiorMaison.jpg" }, { name: "valentino", img: "../photos/ValentinoUomo.jpg"} ];
var button=$("#button")
button.on("click", function (){
      var result=$("#perfumeid").val()
      console.log('result',result);
  perfumes.map(function(e){
    if(e.name === result){
            $("#div").append(`<div class="tester">
               <img id="see" src=${e.img} alt="hello"/>
               <h4 id="h4">${e.name}</h4>
               
               </div>`);
           
           }
  })
      });

