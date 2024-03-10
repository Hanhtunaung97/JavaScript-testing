
const audioBtn = document.querySelector("#audioBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const audio=new Audio("./sounds/UCL.mp3");
console.dir(audio);
audioBtn.addEventListener('click',() => {
    audio.play();
    console.log(audio.duration);
})
pauseBtn.addEventListener('click',() => {
    audio.pause();
    console.log(audio.currentTime);
})
audio.addEventListener("loadstart",() => {
    console.log("audio is start load");
})
audio.addEventListener("play",() => {
    console.log("audio start play");
})
audio.addEventListener("playing",() => {
    console.log("audio is playing"+audio.currentTime);
})
audio.addEventListener("ended",() => {
    console.log("audio is ended");
})

