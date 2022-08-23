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

