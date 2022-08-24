const muscu = document.querySelector(".passions-box.basket");

muscu.addEventListener("click", () => {
    console.log("Click !");
});


// hisashibuli dana , mugiwara:

const mugi = document.querySelector(".passions-box.manga");

const ring = () => {
    const audio = new Audio();
    audio.src = "hisashi.mp3";
    audio.play();
}

mugi.addEventListener("click", (e) => {
    console.log("Click !");
    ring();
});


// DARK MODE

let icon = document.getElementById("moonIcon");
 
/*icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
}*/

//OU

icon.addEventListener("click", (e) => {
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
    }else{
        icon.src = "moon.png";
    }
});

