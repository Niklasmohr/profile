/** toggle button for mobile View */
function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function openTab(thiz) {
    var what = thiz.innerHTML;
    what = what.toLowerCase();
    var x = document.getElementById(what);
    document.getElementById("home").classList.remove("active");
    document.getElementById("skills").classList.remove("active");
    document.getElementById("showcase").classList.remove("active");
    document.getElementById("contact").classList.remove("active");
    document.getElementById("about").classList.remove("active");
    x.classList.toggle("active");
}

function newImage () {
    var randomNumber=Math.floor(Math.random() * 10)+1;
    document.getElementById("myImage").setAttribute("src","img/"+randomNumber+".jpg");
};
    
    slideshowActive = setInterval(newImage,3000);
    var toggleState = 1;
function setMyTimer () {
    if 
    ( toggleState === 0 ) {
    slideshowActive = setInterval(newImage,3000);
        toggleState = 1;
    } else if 
    (toggleState === 1 ) {
        clearTimeout(slideshowActive);
    }
}

function checkForm () {
    var target =document.getElementById("name");
    var x =document.getElementById("absender");
    var y =document.getElementById("nachricht");
    var z =document.getElementById("betreff");
    if ( target.value == "" || x.value == "" || y.value == "" || z.value == "" ) {
        alert("bitte alle felder ausfüllen !");
    } else {
        document.getElementById("formResult").innerHTML ="Vielen Dank für Ihre Nachricht, Sie werden in Kürze von mir hören."
    }

}