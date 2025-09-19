function CreatePerfumes(name, imgSrc) {   
    var obj = {};
    obj.name = name;
    obj.img = imgSrc;
    obj.display = function() {
        return `<div class="tester">
                    <img id="see" src="${this.img}" alt="this is perfume pic"/>
                    <h4 id="h4">${this.name}</h4>
                </div>`;
    };
    return obj;
}

var perfumes = [];


if (localStorage.getItem("perfumes")) {
    var storedPerfumes = JSON.parse(localStorage.getItem("perfumes"));
    storedPerfumes.forEach(function(p) {
        perfumes.push(CreatePerfumes(p.name, p.img));
        $("#perfumeDisplay").append(CreatePerfumes(p.name, p.img).display());
    });
}


document.getElementById("addPerfumeButton").addEventListener("click", function() {
    var name = document.getElementById("perfumeName").value.trim();
    var fileInput = document.getElementById("perfumeImgFile");
    var file = fileInput.files[0];

    if (!name || !file) {
        alert("Please enter a name and select an image");
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        var imgSrc = e.target.result;
        var perfume = CreatePerfumes(name, imgSrc);
        perfumes.push(perfume);

        
        var storeArray = perfumes.map(p => ({name: p.name, img: p.img}));
        localStorage.setItem("perfumes", JSON.stringify(storeArray));

        
        $("#perfumeDisplay").append(perfume.display());

        document.getElementById("perfumeName").value = "";
        fileInput.value = "";
    };
    reader.readAsDataURL(file); 
});


$("#button").on("click", function () {
    var value = $("#perfumeid").val().toLowerCase();

    $("#perfumeDisplay").empty(); 

    perfumes.forEach(function(p) {
        if (p.name.toLowerCase().includes(value)) {
            $("#perfumeDisplay").append(p.display());
        }
    });
});
