let video = document.getElementById("myVideo")

let playBtn = document.getElementById("playBtn")
playBtn.addEventListener("click", function(){
    video.play();
});

let pauseBtn = document.getElementById("pauseBtn")
playBtn.addEventListener("click", function(){
    video.pause();
});